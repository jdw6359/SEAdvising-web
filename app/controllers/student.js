'use strict';

//TODO: Remove $http from injection
StudentController.$inject = ['$scope', '$routeParams', '$uibModal', 'StudentFactory'];
function StudentController($scope, $routeParams, $uibModal, StudentFactory){


    //Request the specific student record

    console.log("Student controller loaded for student: " + $routeParams.id);

    var vm = this;

    vm.student = StudentFactory.get({id: $routeParams.id});
    vm.student.$promise.then(function(student){
    	vm.coops = student.coops;
    })


    vm.add_coop = function(){
    	console.log("add coop clicked");

    	vm.coopModalInstance = $uibModal.open({
    		templateUrl: 'app/templates/modals/coop.html',
    		controller: 'CoopModalController',
    		controllerAs: 'coop_modal_ctrl',
    		scope: $scope
    	});
    }

    $scope.refresh = function(){
    	vm.student = StudentFactory.get({id: $routeParams.id});
    	vm.student.$promise.then(function(student){
    		vm.coops = student.coops;
    	})
    }
}

module.exports = StudentController;