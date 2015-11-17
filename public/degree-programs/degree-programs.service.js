'use strict';

(function() {
	angular.module("app")
		.factory("DegreeProgramsService", DegreeProgramsService);
	
	DegreeProgramsService.$inject = ["$http", "$q"];

	function DegreeProgramsService($http, $q) {
		var url = "http://localhost:5000";
		var service = {};

		service.GetAll = GetAll;
		service.AddDegreeProgram = AddDegreeProgram;
		return service;
		
		function GetAll() {
			var deferred = $q.defer();

			$http.get(url+"/degree-programs")
				.success(function(data) {
					deferred.resolve(data);
				})
				.error(function(data) {
					deferred.reject("Error: Cannot Retrieve Degree Programs");
				});
				return deferred.promise;
		}

		function AddDegreeProgram(newDegreeProgram) {
			var deferred = $q.defer();

			$http.post(url + "/degree-programs", newDegreeProgram)
				.success(function(data) {
					deferred.resolve(data);
				})
				.error(function(data) {
					deferred.reject("Error: Cannot Add Degree Program");
				});
				return deferred.promise;
		}
	}
})();

