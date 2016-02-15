'use strict';

var app = angular.module('myapp', []);

app.controller('mainctrl', function($scope, $http){
  console.log('myapp');
  $scope.list = [];
  $scope.add = function(task){
    console.log(task);
    $http({method: 'POST', url: '/tasks/add', data: {task:task}}).then(function success(data){
      console.log(data);
      var attr = {description : data.data.desc, date: data.data.date};
      $scope.list.push(attr);
    },
    function err(err){
      console.log('Error:', err, 'error');
    });
  };

  $scope.done = function(task){
    var formattedtask = {desc: task.description, date: task.date};
    $http({method: 'PUT', url: '/tasks/done', data: {task:formattedtask}}).then(function success(data){
      console.log(data);
    },
    function err(err){
      console.log('Error:', err, 'error');
    });
  };
});
