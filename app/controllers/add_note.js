'use strict'

AddNoteController.$inject = ['StudentFactory', 'studentId', '$uibModalInstance'];
function AddNoteController(StudentFactory, studentId, $uibModalInstance){
	console.log("Add note controller loaded");
}

module.exports = AddNoteController;