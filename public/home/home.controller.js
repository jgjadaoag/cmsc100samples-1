// home home/controller.js

'use strict';

(function() {
	angular
		.module('app')						// creates an app module
		.controller("HomeCtrl", HomeCtrl);	// creates a controller named "HomeCtrl"

	HomeCtrl.$inject = ["$scope"];

	function HomeCtrl($scope) {
		$scope.uname = "User";
	}
})();