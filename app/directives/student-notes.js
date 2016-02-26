'use-strict'

function StudentNotesDirective(){
	return{
		templateUrl: 'app/templates/student-notes.html',
		restrict: 'E',
		bindToController: {
			studentId: '='
		},
		controller: ['$uibModal', '$routeParams', 'StudentFactory', StudentNotesController],
		controllerAs: 'student_notes_ctrl'
	}
}

function StudentNotesController($uibModal, $routeParams, StudentFactory){

	var vm = this;

	// get the studentId from the url
	var studentId = $routeParams.id;

	vm.notes = StudentFactory.notes({id: studentId}, function(res){
		console.log("notes response: ");
		console.log(res);
	});


}

module.exports = StudentNotesDirective;