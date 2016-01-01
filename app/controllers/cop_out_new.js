'use-strict'

CopOutNewController.$inject = ['$location', '$routeParams', 'StudentFactory']

function CopOutNewController($location, $routeParams, StudentFactory){

	console.log("Cop out new controller loaded");

	var vm = this;
	vm.codes = ['A','B','C','D','E','F'];
	vm.application_statuses = ['Applied', 'Accepted', 'Rejected'];


	vm.submit = function(){
		console.log("cop out submit clicked");
		StudentFactory.add_cop_out({id: $routeParams.id}, 
			{cop_out: vm.cop_out}, function(res){

			console.log(res);

			$location.path('/students');
		})
	}
}

module.exports = CopOutNewController;