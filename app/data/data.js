var rawDocuments = {
    'users':  [{
      name: 'Dom Quill',
      email: 'dom.quill@gmail.com',
      skills: [{
        'name': 'nodejs',
        'score': 5
      }]
    }, {
      name: 'tom Quill',
      email: 'tom.quill@gmail.com',
      skills: [{
        'name': 'nodejs',
        'score': 3
      }]
    }, {
      name: 'Jerry Quill',
      email: 'jerry.quill@gmail.com',
      skills: [{
        'name': 'angular',
        'score': 4
      }]
    }, {
      name: 'Harry Quill',
      email: 'harry.quill@gmail.com',
      skills: [{
        'name': 'angular',
        'score': 2
      }]
    }],
    'lessons':[{
        title:'welcome to JavaScript',
        slide:[{body:'Concept and history of JS',title:'Basic introduction to Javascript'},{body:'Understabding OOP in JS',title:'OOP in Javascript'}],
        scheduled_at :{startTime: new Date('May 28 2017 09:30:00'),endTime: new Date('May 29 2017 14:00:00')},
        user:  '592d0d30e90749305834b5ed'
    },
    {
        title:'welcome to Nodejs',
        slide:[{body:'Concept and history of Nodejs',title:'Basic introduction to Nodejs'},{body:'Understabding Callback in nodejs',title:'Callback in nodejs'}],
        scheduled_at :{startTime: new Date('May 25 2017 09:30:00'),endTime: new Date('May 27 2017 15:00:00')},
        user: '592d0d30e90749305834b5ed'
    },
    {
        title:'welcome to Angularjs',
        slide:[{body:'Concept and history of Angularjs',title:'Basic introduction to Angularjs'},{body:'Understabding Services factories in Angularjs',title:'SPF in Angularjs'}],
        scheduled_at :{startTime: new Date('May 21 2017 09:30:00'),endTime: new Date('May 31 2017 15:00:00')},
        user:  '592d0d30e90749305834b5ef'
    },
    {
        title:'welcome to Mongoose',
        slide:[{body:'Concept and history of Mongoose',title:'Basic introduction to Mongoose'},{body:'Understabding schema in mongoose',title:'schema in mongoose'}],
        scheduled_at :{startTime: new Date('Jun 10 2017 09:30:00'),endTime: new Date('Jun 12 2017 14:00:00')},
        user:  '592d0d30e90749305834b5f3'
    }],
    'quizzes':[{
        title:'JavaScript quiz',
        question:[{body:'Concept and history of JS',score:5},{body:'Understabding OOP in JS',score: 3}],
        scheduled_at :{startTime: new Date('May 02 2017 09:30:00'),endTime: new Date('May 20 2017 14:00:00')},
        user:  '592d0d30e90749305834b5ed'
    },
    {
        title:'Nodejs quiz',
        question:[{body:'Concept and history of Nodejs',score:2},{body:'Understabding Callback in nodejs',score:4}],
        scheduled_at :{startTime: new Date('May 25 2017 09:30:00'),endTime: new Date('May 29 2017 15:00:00')},
        user: '592d0d30e90749305834b5ed'
    },
    {
        title:'Angularjs quiz',
        question:[{body:'Concept and history of Angularjs',score:3},{body:'Understabding Services factories in Angularjs',score: 3}],
        scheduled_at :{startTime: new Date('Jun 10 2017 09:30:00'),endTime: new Date('Jun 13 2017 15:00:00')},
        user:  '592d0d30e90749305834b5ef'
    },
    {
        title:'Mongoose quiz',
        question:[{body:'Concept and history of Mongoose',score:5},{body:'Understabding schema in mongoose',score:5}],
        scheduled_at :{startTime: new Date('May 29 2017 09:30:00'),endTime: new Date('Jun 03 2017 14:00:00')},
        user:  '592d0d30e90749305834b5f3'
    }]
}

module.exports = rawDocuments;