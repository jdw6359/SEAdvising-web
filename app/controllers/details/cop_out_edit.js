'use strict';

CopOutEditController.$inject = ['StudentFactory', '$location', '$routeParams'];
function CopOutEditController(StudentFactory, $location, $routeParams) {

    var vm = this;
    
    vm.formTitle = 'Edit Change of Program Out Form';
    vm.codes = ['A','B','C','D','E','F'];
    vm.applicationStatuses = ['Applied', 'Accepted', 'Rejected'];

    var studentId = $routeParams.id;
    StudentFactory.get({ id: studentId }, {}, function (student) {
        vm.cop_out =  student.cop_out;
    })

    vm.submit = function() {
        StudentFactory.edit_cop_out({ id: studentId }, { cop_out: vm.cop_out }, function (res) {
            $location.path('/students/' + studentId);
        });
    }
}

module.exports = CopOutEditController;
