angular.
  module('github').
  component('githubUserRows', {
    templateUrl: 'github/components/github-user-rows.template.html',
    controllerAs: 'vm',
    bindings: {
    	users: '=users'
    },
  });