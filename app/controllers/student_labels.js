'use strict'

StudentLabelsController.$inject = ['StudentFactory', 'LabelFactory', '$routeParams'];
function StudentLabelsController(StudentFactory, LabelFactory, $routeParams) {

    var vm = this;

    var studentId = $routeParams.id;
    console.log("student id: ");
    console.log(studentId);

    vm.labels = LabelFactory.query();
    vm.studentLabels = StudentFactory.getLabels({ id: $routeParams.id })

    vm.addLabel = function(labelId) {
        console.log("add label invoked");
        console.log(labelId);
        StudentFactory.addLabel({ student_id: studentId, label_id: labelId }, {}, function (res) {
            console.log("add label response: ");
            console.log(res);
        });
    }

    vm.removeLabel = function(labelId) {
        console.log("remove label invoked");
        console.log(labelId);
        StudentFactory.removeLabel({ student_id: studentId, label_id: labelId }, {}, function (res) {
            console.log("remove label response: ");
            console.log(res);
        })
    }
}

module.exports = StudentLabelsController;
