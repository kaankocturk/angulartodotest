var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', function(req, res, next) {
  var task = new Task(req.body.task);
  task.save(function(err,task){
    console.log('err',err);
    console.log('task', task);
    res.send(task);
  });
});
module.exports = router;
