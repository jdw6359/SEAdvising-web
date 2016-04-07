'use strict';

SeniorProjectEditController.$inject = [];
function SeniorProjectEditController() {
	var vm = this;

	vm.statusOptions = ['Accepted', 'Rejected'];
	vm.grad_app_submitted_datepicker_opened = false;

	vm.open_grad_app_submitted_picker = function() {
		vm.grad_app_submitted_datepicker_opened = true;
	}

	vm.submit = function(){
		console.log('Submit edit senior project invoked');
	}	
}

module.exports = SeniorProjectEditController;
