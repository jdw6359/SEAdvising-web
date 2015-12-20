'use strict';

//TODO: Remove $http from injection
StudentListController.$inject = ['$location', '$http', 'StudentFactory'];
function StudentListController($location, $http, StudentFactory){

	var vm = this;

	vm.students = StudentFactory.query();

	vm.goto = function(studentId){
		$location.path('students/' + studentId);
	}
}

module.exports = StudentListController;