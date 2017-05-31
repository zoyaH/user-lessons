// server.js

// set up =====================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
var mongoose = require('mongoose');
var flash    = require('connect-flash');

var morgan       = require('morgan');

// configuration ==============================
mongoose.connect('mongodb://localhost/mydb'); // connect to our database


// set up our express application
app.use(morgan('dev')); // log every request to the console

// routes ====================================
require('./app/routes.js')(app); // load our routes and pass in our app and fully configured passport

// launch ======================================
app.listen(port);
console.log('The magic happens on port ' + port);
