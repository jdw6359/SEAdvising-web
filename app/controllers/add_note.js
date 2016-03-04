'use strict'

AddNoteController.$inject = ['StudentFactory', 'studentId', '$uibModalInstance'];
function AddNoteController(StudentFactory, studentId, $uibModalInstance){
	console.log("Add note controller loaded");

	var vm = this;

	vm.studentId = studentId;
	vm.note = {};

	// submit add note modal form
	vm.submit = function(){
		StudentFactory.add_note({id: vm.studentId}, {note: vm.note}, function(res){
			$uibModalInstance.close(res);
		})
	}
}

module.exports = AddNoteController;
