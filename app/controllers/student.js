'use strict';

//TODO: Remove $http from injection
StudentController.$inject = ['$scope', '$http', 'StudentFactory'];
function StudentController($scope, $http, StudentFactory){

	//TODO: Move this to request interceptor
    $http.defaults.headers.common["Auth-Token"] = $scope.authToken;

	var vm = this;

	var students = StudentFactory.query();
	students.$promise.then(function(students){
		vm.students = students;
	});
}

module.exports = StudentController;