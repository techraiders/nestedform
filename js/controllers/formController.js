(function() {
	"use strict";
	angular.module("nestedForm")
		.controller("formController", function($scope, $state) {
			$scope.schoolsList = [];
			$scope.msg = "Hello, formController is successfully connected to this view.";
			console.info($scope.msg);

			$scope.register = function(school) {
				if(school) {
					$scope.schoolsList.push(school);
					console.info($scope.schoolsList);
					$state.go('registeredschools');
				} else {
					alert("Please fill at least one field.");
					return false;
				}
			}
		});
})(window.angular);