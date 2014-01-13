'use strict';

angular.module('dyuDevApp.controllers')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('data/resume.json')
      .then(function(data) {
        $scope.resume = data.data;
    });
  });
