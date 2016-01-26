'use-strict'

function StudentNotesDirective(){
	return{
		templateUrl: 'app/templates/student-notes.html',
		restrict: 'E',
		bindToController: {
			notes: '='
		},
		controller: [StudentNotesController],
		controllerAs: 'student_notes_ctrl'
	}
}

function StudentNotesController(){

}

module.exports = StudentNotesDirective;