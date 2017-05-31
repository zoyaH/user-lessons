/*
* created by : zulekha herlekar
* date : 28/05/2017
* description : user schema
**/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: String,
  skills: [{
    name: String,
    score: Number
  }]
});

// compile model
var User = mongoose.model('User', userSchema);

module.exports = User;