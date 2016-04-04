'use strict';

StudentController.$inject = [
    'StudentFactory',
    '$scope',
    '$routeParams'
];

function StudentController(StudentFactory, $scope, $routeParams){

    var vm = this;
    var student_id = $routeParams.id
    vm.student = StudentFactory.get({id: student_id});
    vm.transactions = StudentFactory.transactions({id: student_id});

    $scope.refresh = function(){
        vm.student = StudentFactory.get({id: $routeParams.id});
    }
}

module.exports = StudentController;