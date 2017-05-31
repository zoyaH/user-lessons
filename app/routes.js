/*
* created by : zulekha herlekar
* date : 28/05/2017
* description : All respective routs related with app
**/
// grab the models and respective libraries
var User = require('../app/models/users');
var Lesson = require('../app/models/lessons');
var Quiz = require('../app/models/quizzes');
var rawDocuments = require('../app/data/data.js');
var async = require('async');

//get lesson/quiz completed status for each user
module.exports = function(app) {
  app.get('/status', function(req, res) {

    //aggregate query to get lesson groupby each user
    var lessonQuery = [{
      $match: {
        $and: [{
          'scheduled_at.startTime': {
            "$lte": new Date()
          }
        }, {
          'scheduled_at.endTime': {
            "$gte": new Date()
          }
        }]
      }
    }, {
      $group: {
        _id: "$user",
        num_lessons: {
          $sum: 1
        },
        lessons: {
          $push: {
            title: "$title",
            schedule: "$scheduled_at"
          }
        }
      }
    }];
    
    //aggregate query to get quizzes groupby each user

    var quizQuery = [{
      $match: {
        $and: [{
          'scheduled_at.startTime': {
            "$lte": new Date()
          }
        }, {
          'scheduled_at.endTime': {
            "$gte": new Date()
          }
        }]
      }
    }, {
      '$project': {
        'user': 1,
        'question': {
          '$sum': {
            '$map': {
              'input': '$question',
              'as': 'subc',
              'in': '$$subc.score'
            }
          }
        },
        'title': 1,
        'scheduled_at': 1
      }
    }, {
      '$group': {
        '_id': '$user',
        'totalScore': {
          '$sum': '$question'
        },
        'title': {
          '$push': '$title'
        },
        'scheduled_at': {
          '$push': '$scheduled_at'
        }
      }
    }]
    var selectedSchema, query;

    if (req.query.model === 'lesson' || req.query.model === 'quiz') {
      selectedSchema = req.query.model === 'lesson' ? Lesson : Quiz;
      query = req.query.model === 'lesson' ? lessonQuery : quizQuery;

      //get all lessons/quiz group by each user
      async.parallel({
        started: getStarted,
        notStarted: getNotStarted,
        completed: getCompleted
      }, function(err, results) {
        res.json(results);
      });

      //get lesson/quiz which are started but not completed yet
      function getStarted(callback) {
        selectedSchema.aggregate(query, function(err, result) {
          if (err) {
            throw err;
          } else {
            User.populate(result, {
              path: '_id',
              select: 'name email'
            }, function(err, populatedTransactions) {
              callback(null, populatedTransactions);
            });
          }
        })
      }

      //get lesson/quiz which are completed before today
      function getCompleted(callback) {
        query[0] = {
          $match: {
            'scheduled_at.endTime': {
              "$lt": new Date()
            }
          }
        }
        selectedSchema.aggregate(query, function(err, result) {
          if (err) {
            throw err;
          } else {
            User.populate(result, {
              path: '_id',
              select: 'name email'
            }, function(err, populatedTransactions) {
              callback(null, populatedTransactions);
            });
          }
        })
      }
      
      //get lesson/quiz which are not started as of today
      function getNotStarted(callback) {
        query[0] = {
          $match: {
            'scheduled_at.startTime': {
              "$gt": new Date()
            }
          }
        }
        selectedSchema.aggregate(query, function(err, result) {
          if (err) {
            throw err;
          } else {
            User.populate(result, {
              path: '_id',
              select: 'name email'
            }, function(err, populatedTransactions) {
              callback(null, populatedTransactions);
            });
          }
        })
      }
    } else {
      return res.status(400).send('\'model\' query paramater should be passed from url. It can be \'lesson\' or \'quiz\'.\n For eg /status?model=lesson');
    }

  });

  //skill score for each user
  app.post('/users/skill', function(req, res) {
    User.find({}, {
        'skills': 1
      })
      .then(function(users) {
        res.json(users);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // add raw data in each collection
  app.post('/users', function(req, res) {
    User.insertMany(rawDocuments.users)
      .then(function(mongooseDocuments) {
        res.json('raw Documents for users added successfully');
      })
      .catch(function(err) {
        res.json(err);
      });
  });
  app.post('/lessons', function(req, res) {
    Lesson.insertMany(rawDocuments.lessons)
      .then(function(mongooseDocuments) {
        res.json('raw Documents for lessons added successfully');
      })
      .catch(function(err) {
        res.json(err);
      });
  });
  app.post('/quizzes', function(req, res) {
    Quiz.insertMany(rawDocuments.quizzes)
      .then(function(mongooseDocuments) {
        res.json('raw Documents for quizzes added successfully');
      })
      .catch(function(err) {
        res.json(err);
      });
  });


}