'use strict';

ProgramDetailEditController.$inject = ['StudentFactory', '$routeParams', '$location'];
function ProgramDetailEditController(StudentFactory, $routeParams, $location) {
    var vm = this;
    var studentId = $routeParams.id;

    vm.formTitle = 'Program Detail Edit Form';
    vm.submit = submit;

    StudentFactory.get({id: studentId}, function(student) {
        vm.program_detail = student.program_detail;
    });

    vm.application_domain_submitted_datepicker_open = false;
    vm.minor_submitted_datepicker_open = false;

    function submit() {
        StudentFactory.edit_program_detail({ id: studentId },
            { program_detail: vm.program_detail }, function(res) {
                $location.path('/students/' + studentId);
            }
        );
    }
}

module.exports = ProgramDetailEditController;
