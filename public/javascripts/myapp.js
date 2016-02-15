'use strict';

var app = angular.module('myapp', []);

app.controller('mainctrl', function($scope, $http){
  console.log('myapp');
  $scope.list = [];
  $scope.add = function(task){
    console.log(task);
    $http({method: 'POST', url: '/tasks/add', data: {task:task}}).then(function success(data){
      console.log(data);
      // $scope.list.push(data);
    },
    function err(err){
      console.log('Error:', err, 'error');
    });
  };
});
