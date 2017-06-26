'use strict';

angular.module('app.home', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.template.html',
    controller: 'HomeController',
    controllerAs: 'vm'
  });
  
}])

// TODO: Move controller to it's own file
.controller('HomeController', ['GitAPIService', function(GitAPIService) {
	var vm = this;  // ViewModel definition 
	vm.repositories = [];
	vm.users = [];
	vm.todayOneMonthAgo = todayOneMonthAgo();
	vm.todayOneYearAgo = todayOneYearAgo();
	vm.refreshUsers = refreshUsers; // Refresh table of users
	vm.refreshRepositories = refreshRepositories; // Refresh table of repositories
	vm.getUserFollowersCount = getUserFollowersCount;

	var intervalId;

	////////////////////////////////
	// Function definitions bellow
	////////////////////////////////

	function todayOneYearAgo () {
		var today = new Date();
		// rest one year
		today.setFullYear( today.getFullYear() - 1 );
		// return modified date in YYYY-MM-DD format
		return today.toISOString().substring(0, 10);;
	}

	function todayOneMonthAgo () {
		var today = new Date();
		// rest one month
		today.setMonth( today.getMonth() - 1 );
		// return modified date in YYYY-MM-DD format
		return today.toISOString().substring(0, 10);;
	}

	function refreshUsers () {
		// search for users
		GitAPIService.one("search/users").get({
			access_token: '2c259912521374df4a5a28344c18b0b854331266',
			sort: "followers",  // Order by stars
			order: "desc",  // Decending order
			per_page: 5,   // 5 results per page
			q:"created:>" + vm.todayOneYearAgo // created a year ago
		}).then(function(searchResult){
			// Clear previus interval if any
			if(intervalId) {
				clearInterval(intervalId);
			}
			// Create interval to refresh followers count every 2 minutes
			intervalId = window.setInterval(refreshFollowersCount, 120000);
			// TODO: Change map to forEach
			function refreshFollowersCount() {
				vm.users = searchResult.items.map(function(item){
					// each user item will be updated
					vm.getUserFollowersCount(item);
					// Run once right away
					return item;
				});
			}
			// run once right away to update followers count
			refreshFollowersCount();
		});
	}

	function refreshRepositories () {
		// Search for reposotories
		GitAPIService.one("search/repositories").get({
			access_token: '2c259912521374df4a5a28344c18b0b854331266',
			sort:"stars",  // Order by stars
			order: "desc",  // Decending order
			per_page: 5,   // 5 results per page
			q:"created:>"  + vm.todayOneMonthAgo // created a month ago
		}).then(function(searchResult){
			// Pass only required fields to vm
			vm.repositories = searchResult.items;
		});

	}

	// Change function name
	function getUserFollowersCount (user) {
		// TODO: Implement conditional request
		GitAPIService.one("users", user.login).get({
			access_token: '2c259912521374df4a5a28344c18b0b854331266'
		}).then(function(profile){
			user['followers'] = profile.followers;
		});
	}

}]);