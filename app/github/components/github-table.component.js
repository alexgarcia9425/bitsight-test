'use strict';

// Register github-table on core.github module
angular.
  module('github').
  component('githubTable', {
    templateUrl: 'github/components/github-table.template.html',
    transclude: true,
    controllerAs: 'vm',
    bindings: {
    	title: '@title'
    },
  });