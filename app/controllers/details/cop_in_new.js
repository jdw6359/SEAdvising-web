'use strict';

CopInNewController.$inject = ['StudentFactory', '$routeParams', '$location'];
function CopInNewController(StudentFactory, $routeParams, $location) {
	var vm = this;

	vm.formTitle = 'New Change of Program In Form';

	var studentId = $routeParams.id;

	vm.submit = function() {
		StudentFactory.add_cop_in({ id: studentId },
			{ cop_in: vm.cop_in }, function (res) {
				$location.path('/students/' + studentId);
			}
		);
	}
}

module.exports = CopInNewController;
