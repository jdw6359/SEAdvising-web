'use strict';

CoopEditController.$inject = ['CoopFactory', '$routeParams', '$location'];
function CoopEditController(CoopFactory, $routeParams, $location) {

	var vm = this;
	vm.formTitle = 'Edit Co-Op Form';

	var studentId = $routeParams.id;
	var coopId = $routeParams.coop_id;

	CoopFactory.get({ id: coopId }, function (coop) {
		vm.coop = coop;
	})

	vm.submit = function() {
		CoopFactory.update({ id: coopId }, 
			{ coop: vm.coop }, function (res) {
				$location.path('/students/' + studentId);
			}
		);
	}
}

module.exports = CoopEditController;
