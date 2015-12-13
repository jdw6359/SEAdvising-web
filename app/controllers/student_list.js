'use strict';

//TODO: Remove $http from injection
StudentListController.$inject = ['$scope', '$location', '$http', 'StudentFactory'];
function StudentListController($scope, $location, $http, StudentFactory){

	//TODO: Move this to request interceptor
    $http.defaults.headers.common["Auth-Token"] = $scope.authToken;

	var vm = this;

	vm.students = StudentFactory.query();

	vm.goto = function(studentId){
		$location.path('students/' + studentId);
	}
}

module.exports = StudentListController;