'use strict'

CopOutNewController.$inject = ['StudentFactory', '$location', '$routeParams']

function CopOutNewController(StudentFactory, $location, $routeParams){

	var vm = this;

	vm.formTitle = 'New Change Of Program Out Form';
	vm.codes = ['A','B','C','D','E','F'];
	vm.applicationStatuses = ['Applied', 'Accepted', 'Rejected'];

	var studentId = $routeParams.id;

	vm.submit = function(){
		StudentFactory.add_cop_out({id: studentId}, 
			{cop_out: vm.cop_out}, function(res){
			$location.path('/students/' + studentId);
		})
	}
}

module.exports = CopOutNewController;