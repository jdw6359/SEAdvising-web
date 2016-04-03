'use strict';

CopInEditController.$inject = ['StudentFactory', '$routeParams', '$location'];
function CopInEditController(StudentFactory, $routeParams, $location) {
	var vm = this;

	vm.formTitle = 'Edit Change of Program Out Form';

	var studentId = $routeParams.id;
	StudentFactory.get({ id: studentId }, function (student) {
		vm.cop_in = student.cop_in;
	});

	vm.submit = function() {
		StudentFactory.edit_cop_in({ id: studentId }, 
			{ cop_in: vm.cop_in }, function (res) {
				$location.path('/students/' + studentId);
			}
		);
	}
}

module.exports = CopInEditController;
