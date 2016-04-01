'use strict';

StudentEditController.$inject = ['StudentFactory', 'AdvisorFactory', '$location', '$routeParams'];
function StudentEditController(StudentFactory, AdvisorFactory, $location, $routeParams) {

    var vm = this;

    var studentId = $routeParams.id;
    vm.student = StudentFactory.get({ id: studentId });

    vm.formTitle = 'Edit Student Form';
    vm.studentTypes = ['FR', 'TR'];
    vm.studentStatuses = ['Active', 'Inactive', 'COP', 'Suspended', 'CRP', 'LOA'];

    vm.advisors = AdvisorFactory.query();

    vm.submit = function(){
        StudentFactory.update({ id: studentId }, {student: vm.student}, function(res){
            console.log("student update callback");
            $location.path('/students');
        }, function(err){
            console.log("error response");
            console.log(err);
        });
    }

}

module.exports = StudentEditController;
