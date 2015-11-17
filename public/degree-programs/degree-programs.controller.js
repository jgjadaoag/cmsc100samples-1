'use strict';

(function() {
	angular.module("app")
		.controller("DegreeProgramsCtrl", DegreeProgramsCtrl);

	DegreeProgramsCtrl.$inject = ["$scope", "DegreeProgramsService"];
	
	DegreeProgramsCtrl($scope, DegreeProgramsService) {
		scope.degreePrograms = [];

		DegreeProgramsService.GetAll()
			.then(function(data) {
				$scope.degreePrograms = data;
			});

		$scope.AddDegreeProgram = function() {
			DegreeProgramsService.AddDegreeProgram($scope.newDegreeProgram)
				.then(function(data) {
					$scope.newDegreeProgram.code = "";
					$scope.newDegreeProgram.name = "";
					$scope.degreePrograms.push(data);
				});()


