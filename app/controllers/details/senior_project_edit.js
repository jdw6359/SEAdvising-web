'use strict';

SeniorProjectEditController.$inject = ['StudentFactory', '$routeParams', '$location'];
function SeniorProjectEditController(StudentFactory, $routeParams, $location) {
	var vm = this;
	var studentId = $routeParams.id;

	StudentFactory.get({ id: studentId }, function (student) {
		vm.senior_project = student.senior_project;
	});

	vm.formTitle = 'Edit Senior Project Form';
	vm.statusOptions = ['Accepted', 'Rejected'];
	vm.grad_app_submitted_datepicker_opened = false;

	vm.open_grad_app_submitted_picker = function() {
		vm.grad_app_submitted_datepicker_opened = true;
	}

	vm.submit = function(){
		StudentFactory.edit_senior_project({ id: studentId },
			{ senior_project: vm.senior_project },
			function(res) {
				$location.path('/students/' + studentId);
			}
		)
	}	
}

module.exports = SeniorProjectEditController;
