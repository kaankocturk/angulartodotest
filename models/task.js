'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = Schema({
  desc: {type: String, required: true),
  date: {type: Date, required: true},
  isDone: {type: Boolean}
});

Task = mongoose.model('Task', taskSchema);
module.exports = Task;
