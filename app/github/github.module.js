'use strict';

// Define github module
angular.module('github', ['restangular'])
.config(['RestangularProvider', function(RestangularProvider){
  	// TODO: Implement request-limit error catching and alert
	RestangularProvider.setDefaultHeaders({
  		// Set specific API Version, V3
  		Accept: "application/vnd.github.v3+json",
  	});
}]);
