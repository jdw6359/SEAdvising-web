'use strict';

ProgramDetailNewController.$inject = ['StudentFactory', '$routeParams', '$location'];
function ProgramDetailNewController(StudentFactory, $routeParams, $location) {
    var vm = this;
    var studentId = $routeParams.id;

    vm.formTitle = 'Program Detail New Form';

    vm.program_detail = {};
    vm.program_detail.application_domain_submitted_date = new Date();
    vm.program_detail.minor_submitted_date = new Date();

    vm.application_domain_submitted_datepicker_open = false;
    vm.minor_submitted_datepicker_open = false;

    vm.submit = function() {
        StudentFactory.add_program_detail({ id: studentId },
            { program_detail: vm.program_detail }, function (res) {
                $location.path('/students/' + studentId);
            }
        );
    }    
}

module.exports = ProgramDetailNewController;
