'use strict';

//TODO: Remove $http from injection
StudentController.$inject = ['$scope',
	'$routeParams',
	'CoopFactory',
	'StudentFactory'];
function StudentController($scope, $routeParams, CoopFactory, StudentFactory){

    var vm = this;
    var student_id = $routeParams.id
    vm.student = StudentFactory.get({id: student_id});
    vm.transactions = StudentFactory.transactions({id: student_id});

    $scope.refresh = function(){
        vm.student = StudentFactory.get({id: $routeParams.id});
    }
}

module.exports = StudentController;