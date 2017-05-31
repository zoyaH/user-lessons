var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quizSchema = new Schema({
  title: String,
  question: [{
    body: String,
    score: Number
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
var Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;