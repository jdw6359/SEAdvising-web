'use strict';

//TODO: Remove $http from injection
StudentController.$inject = ['$routeParams', '$http', 'StudentFactory'];
function StudentController($routeParams, $http, StudentFactory){


    //Request the specific student record

    console.log("Student controller loaded for student: " + $routeParams.id);

    var vm = this;

    this.student = StudentFactory.get({id: $routeParams.id});

/*
	var vm = this;

	var students = StudentFactory.query();
	students.$promise.then(function(students){
		vm.students = students;
	});
*/

}

module.exports = StudentController;