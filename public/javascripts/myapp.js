'use strict';

var app = angular.module('myapp', []);

app.controller('mainctrl', function($scope, $http, $filter){
  var orderBy = $filter('orderBy');
  console.log('myapp');
  $scope.list = [];

  $http({method: 'GET', url: '/tasks'}).then(function success(data){
    console.log(data);
    if(data.data.length){
      $scope.list = data.data.map(function(task){
        return {description : task.desc, date: task.date};
      });
    }
  },
  function err(err){
    console.log('Error:', err, 'error');
  });

  $scope.add = function(task){
    console.log(task);
    task.isDone = false;
    $http({method: 'POST', url: '/tasks/add', data: {task:task}}).then(function success(data){
      console.log(data);
      var attr = {description : data.data.desc, date: data.data.date, complete: data.data.isDone};
      $scope.list.push(attr);
    },
    function err(err){
      console.log('Error:', err, 'error');
    });
  };

  $scope.done = function(task){
    console.log(task);
    var formattedtask = {desc: task.description, date: task.date, isDone: task.complete};
    console.log(formattedtask);
    $http({method: 'PUT', url: '/tasks/done', data: {task:formattedtask}}).then(function success(data){
      console.log(data);
    },
    function err(err){
      console.log('Error:', err, 'error');
    });
  };

  $scope.order = function(predicate) { //documentation is nice.
    $scope.predicate = predicate;
    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    $scope.list = orderBy($scope.list, predicate, $scope.reverse);
};
});
