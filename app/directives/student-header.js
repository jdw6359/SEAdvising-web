'use-strict'

function StudentHeaderDirective(){
	return{
		templateUrl: 'app/templates/student-header.html',
		restrict: 'E',
		controller: ['$routeParams', 'StudentFactory', StudentHeaderController],
		controllerAs: 'student_header_ctrl'
	}
}

function StudentHeaderController($routeParams, StudentFactory){
	var vm = this;
	vm.student = StudentFactory.get({id: $routeParams.id, associations: false})
}

module.exports = StudentHeaderDirective;