'use-strict'

StudentNewController.$inject = ['$http', '$scope', '$location', 'StudentFactory', 'AdvisorFactory'];

function StudentNewController($http, $scope, $location, StudentFactory, AdvisorFactory){

	//TODO: Move this to request interceptor
    $http.defaults.headers.common["Auth-Token"] = $scope.authToken;

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