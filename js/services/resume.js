'use strict';

angular.module('dyuDevApp.services')
  .factory('ResumeService', function($resource, $location) {
    return $resource('/data/resume.json');
  });