'use-strict'

StudentNewController.$inject = ['StudentFactory'];

function StudentNewController(StudentFactory){

	console.log("student new controller loaded");

}

module.exports = StudentNewController;