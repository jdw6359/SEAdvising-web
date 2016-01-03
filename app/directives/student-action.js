'use-strict';

function StudentActionDirective() {
	return {
		templateUrl: 'app/templates/student-action.html',
		restrict: 'E',
		scope: {
			student: '=',
			title: '='
		}
	}
}

module.exports = StudentActionDirective;

