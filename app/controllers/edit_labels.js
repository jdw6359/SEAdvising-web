'use-strict'

EditLabelsController.$inject = ['StudentFactory', 'student', '$uibModalInstance']
function EditLabelsController(StudentFactory, student, $uibModalInstance) {
	console.log("Edit Labels Controller Loaded...")

	var vm = this;
	vm.student = student;

	vm.submit = function(){
		console.log("making a PUT / PATCH to student");
		//close the modal for now
		StudentFactory.update({id: vm.student.id}, {student: vm.student}, function(res) {
			$uibModalInstance.close(res);
		});
	};

	//provided with the label name, will toggle the flag on the model
	vm.toggleLabel = function(label){
		switch(label) {
			case "red_flag":
				if(vm.student.red_flag_label) {
					vm.student.red_flag_label = false;
				} else {
					vm.student.red_flag_label = true;
				};
				break;

			case "event_attendee":
				if(vm.student.event_attendee_label) {
					vm.student.event_attendee_label = false;
				} else {
					vm.student.event_attendee_label = true;
				};
				break;
				
			default:
				console.log("default toggle");
		};
	}
}

module.exports = EditLabelsController;