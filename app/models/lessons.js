/*
* created by : zulekha herlekar
* date : 28/05/2017
* description : Lesson schema
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lessonSchema = new Schema({
  title: String,
  slide: [{
    body: String,
    title: String
  }],
  scheduled_at: {
    startTime: {
      type: Date,
      default: Date.now
    },
    endTime: {
      type: Date,
      default: Date.now
    }
  },
  user: {
    type: Schema.ObjectId,
    ref: "User"
  }
});

// compile user model
var Lession = mongoose.model('Lession', lessonSchema);

module.exports = Lession;