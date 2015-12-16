'use-strict'

StudentNewController.$inject = ['StudentFactory', 'AdvisorFactory'];

function StudentNewController(StudentFactory, AdvisorFactory){

	var vm = this;

	vm.advisors = AdvisorFactory.query();


	vm.submit = function(){

		//TODO: add form validation here
		console.log("new student submit clicked...student:");
		console.log(vm.student);
	}


}

module.exports = StudentNewController;