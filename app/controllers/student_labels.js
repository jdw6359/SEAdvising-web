'use strict'

StudentLabelsController.$inject = ['StudentFactory', 'LabelFactory', '$routeParams'];
function StudentLabelsController(StudentFactory, LabelFactory, $routeParams) {

    var vm = this;
    var studentId = $routeParams.id;

    vm.labels = LabelFactory.query();
    vm.studentLabels = StudentFactory.getLabels({ id: $routeParams.id })

    vm.addLabel = function(labelId) {
        StudentFactory.addLabel({ student_id: studentId, label_id: labelId });
    }

    vm.removeLabel = function(labelId) {
        StudentFactory.removeLabel({ student_id: studentId, label_id: labelId });
    }
}

module.exports = StudentLabelsController;
