'use strict'

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

	// Click listener for add note functionality
	vm.add_note = function(){
		console.log("adding note");


		var notesModalInstance = $uibModal.open({
			templateUrl: 'app/templates/modals/add-note.html',
			controller: 'AddNoteController',
			controllerAs: 'add_note_ctrl',
			resolve: {
				studentId: function () {
					return vm.studentId;
				}
			}
		});

		notesModalInstance.result.then(function (student) {
			//set vm.student to what is returned from the modal instance closing event
			vm.student = student;
		})		
		
	}


}

module.exports = StudentNotesDirective;
