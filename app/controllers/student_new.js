'use-strict'

StudentNewController.$inject = ['$http', '$location', 'StudentFactory', 'AdvisorFactory'];

function StudentNewController($http, $location, StudentFactory, AdvisorFactory){

	var vm = this;

	vm.student = {};
	vm.advisors = AdvisorFactory.query();


	vm.submit = function(){

		//TODO: add form validation here
		console.log("new student submit clicked...student:");
		console.log(vm.student);

		StudentFactory.save({student: vm.student}, function(res){
			$location.path('/students');
		}, function(err){
			console.log("error response");
			console.log(err);
		});
	}
}

module.exports = StudentNewController;