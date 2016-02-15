'use strict';

var app = angular.module('myapp', []);

app.controller('mainctrl', function($scope){
  $scope.list = [];
  $scope.add = function(task){
    $http({method: 'POST', url: '/task/add', data: {task:task}}).then(function success(data){
      console.log(data);
      // $scope.list.push(data);
    },
    function err(err){
      console.log('Error:', err, 'error');
    });
  };
});
