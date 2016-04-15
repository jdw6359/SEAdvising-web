'use strict';

StudentController.$inject = [
    'StudentFactory',
    '$routeParams'
];

function StudentController(StudentFactory, $routeParams){

    var vm = this;
    var student_id = $routeParams.id
    vm.student = StudentFactory.get({id: student_id});
    vm.transactions = StudentFactory.transactions({id: student_id});
}

module.exports = StudentController;