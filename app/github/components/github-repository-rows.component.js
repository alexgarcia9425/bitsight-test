angular.
  module('github').
  component('githubRepositoryRows', {
    templateUrl: 'github/components/github-repository-rows.template.html',
    controllerAs: 'vm',
    bindings: {
    	repositories: '=repositories'
    },
  });