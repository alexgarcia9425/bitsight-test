'use strict';
// Repository service
angular.
  module('github').
  factory('GitAPIService', ['Restangular',
    function(Restangular) {
      return Restangular.withConfig(function(RestangularConfigurer){
      	// Set base url
      	RestangularConfigurer.setBaseUrl('https://api.github.com');
      });
    }
  ]);