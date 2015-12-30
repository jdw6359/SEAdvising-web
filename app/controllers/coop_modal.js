'use strict';

CoopModalController.$inject = ['$scope', 
	'$location', 
	'$routeParams',
	'$uibModalInstance',
	'StudentFactory'];
function CoopModalController($scope, $location, 
	$routeParams, $uibModalInstance, StudentFactory){

	console.log("Coop Modal Controller Loaded");

	var vm = this;
	vm.coop = {};

	vm.submit = function(){
		StudentFactory.add_coop({id: $routeParams.id}, {coop: vm.coop}, function(res){
			console.log("Student Factory save response:");
			console.log(res);

			$uibModalInstance.close($scope.refresh());
		})
	}

	vm.close = function(){
		$uibModalInstance.dismiss('cancel');
	}
}

module.exports = CoopModalController;
