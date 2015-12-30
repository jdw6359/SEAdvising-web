'use strict';

//TODO: Remove $http from injection
StudentController.$inject = ['$scope',
	'$routeParams',
	'$uibModal',
	'CoopFactory',
	'StudentFactory'];
function StudentController($scope, $routeParams, $uibModal,
	CoopFactory, StudentFactory){

    $scope.refresh = function(){
    	vm.student = StudentFactory.get({id: $routeParams.id});
    	vm.student.$promise.then(function(student){
    		vm.coops = student.coops;
    	})
    }

    var vm = this;
    $scope.refresh();

    vm.add_coop = function(){
    	console.log("add coop clicked");

    	vm.coopModalInstance = $uibModal.open({
    		templateUrl: 'app/templates/modals/coop.html',
    		controller: 'CoopModalController',
    		controllerAs: 'coop_modal_ctrl',
    		scope: $scope
    	});
    }

    vm.remove_coop = function(coop){
    	console.log("remove coop clicked");

    	var remove = confirm("Are you sure you would like to remove the coop at " + coop.company_name + "?");
    	if(remove){
    		CoopFactory.remove({id:coop.id}, function(res){
                $scope.refresh();
            });
    	}

    }

}

module.exports = StudentController;