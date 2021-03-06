'use strict';

(function() {
	angular.module("app", ["ngRoute"])
		.config(config);
	
	config.$inject = ["$routeProvider"];

	function config($routeProvider) {
		$routeProvider
			.when('/degree-programs', {
				"controller":"DegreeProgramsCtrl",
				"templateUrl":"degree-programs/degree-programs.view.html"
			});
	}
})();
