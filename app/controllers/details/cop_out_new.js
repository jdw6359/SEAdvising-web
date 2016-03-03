'use strict'

CopOutNewController.$inject = ['$location', '$routeParams', 'StudentFactory']

function CopOutNewController($location, $routeParams, StudentFactory){

	var vm = this;
	vm.codes = ['A','B','C','D','E','F'];
	vm.application_statuses = ['Applied', 'Accepted', 'Rejected'];

	vm.submit = function(){
		var student_id = $routeParams.id;
		StudentFactory.add_cop_out({id: student_id}, 
			{cop_out: vm.cop_out}, function(res){
			$location.path('/students/' + student_id);
		})
	}
}

module.exports = CopOutNewController;