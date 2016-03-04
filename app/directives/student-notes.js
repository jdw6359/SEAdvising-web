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

	// get all notes associated with student
	vm.notes = StudentFactory.notes({id: studentId});

	// Click listener for add note functionality
	vm.add_note = function(){

		// open up 
		var notesModalInstance = $uibModal.open({
			templateUrl: 'app/templates/modals/add-note.html',
			controller: 'AddNoteController',
			controllerAs: 'add_note_ctrl',
			resolve: {
				studentId: function () {
					return studentId;
				}
			}
		});

		// notesModalInstance will provide note in callback when closed
		notesModalInstance.result.then(function (note) {
			// add the created note to directive view model.
			vm.notes.push(note);
		});
	}
}

module.exports = StudentNotesDirective;
