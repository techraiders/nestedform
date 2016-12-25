(function() {
	"use strict";
	angular.module("nestedForm")
		.controller("formController", function($scope) {
			$scope.schoolsList = [];
			$scope.msg = "Hello";
			console.info($scope.msg);
			$scope.register = function(school) {
				console.info("School Registered", $scope.schoolsList);
			}
		});
})(window.angular);