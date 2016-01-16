'use strict';

//TODO: Remove $http from injection
StudentController.$inject = ['$scope',
	'$routeParams',
	'$uibModal',
	'CoopFactory',
	'StudentFactory'];
function StudentController($scope, $routeParams, $uibModal,
	CoopFactory, StudentFactory){

    var vm = this;
    vm.student = StudentFactory.get({id: $routeParams.id});
    vm.transactions = StudentFactory.transactions({id: $routeParams.id});

    vm.add_coop = function(){
    	vm.coopModalInstance = $uibModal.open({
    		templateUrl: 'app/templates/modals/coop.html',
    		controller: 'CoopModalController',
    		controllerAs: 'coop_modal_ctrl',
    		scope: $scope
    	});
    }

    vm.remove_coop = function(coop){
    	var remove = confirm("Are you sure you would like to remove the coop at " + coop.company_name + "?");
    	if(remove){
    		CoopFactory.remove({id:coop.id}, function(res){
                $scope.refresh();
            });
    	}
    }

    $scope.refresh = function(){
        vm.student = StudentFactory.get({id: $routeParams.id});
    }
}

module.exports = StudentController;