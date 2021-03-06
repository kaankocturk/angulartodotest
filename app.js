'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var mongoUrl = process.env.MONGOLAB_URI || process.env.MONGO_URL || 'mongodb://localhost/todo';
mongoose.connect(mongoUrl, function(err){
  if(err) return console.log('Error connecting to Mongodb:', err);
  console.log('Connected to MongoDB:', mongoUrl);
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./routes/index'));
app.use('/tasks', require('./routes/tasks'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

module.exports = app;
