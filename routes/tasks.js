var express = require('express');
var router = express.Router();
var Task = require('../models/task');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', function(req, res, next) {
  console.log(req.body);
  var task = new Task(req.body.task);
  task.save(function(err,task){
    console.log('err',err);
    console.log('task', task);
    res.send(task);
  });
});

// router.put('/done', function(req, res) {
//   console.log(req.body);
//   Task.update({}, {$set : {}}, function(err){
//     console.log(err);
//
//   });
// });


module.exports = router;