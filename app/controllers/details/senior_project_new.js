'use strict'

SeniorProjectNewController.$inject = ['StudentFactory', '$routeParams', '$location'];
function SeniorProjectNewController(StudentFactory, $routeParams, $location) {
	var vm = this;
	var studentId = $routeParams.id;

	vm.formTitle = 'New Senior Project Form';
	vm.statusOptions = ['Accepted', 'Rejected'];
	vm.grad_app_submitted_datepicker_opened = false;

	vm.open_grad_app_submitted_picker = function() {
		vm.grad_app_submitted_datepicker_opened = true;
	}

	vm.submit = function(){
		StudentFactory.add_senior_project({ id: studentId },
			{ senior_project: vm.senior_project },
			function(res) {
				$location.path('/students/' + studentId);
			}
		);
	}
}

module.exports = SeniorProjectNewController;
