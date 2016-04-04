'use strict'

CoopNewController.$inject = ['$location', '$routeParams', 'StudentFactory'];
function CoopNewController($location, $routeParams, StudentFactory){
	
	var vm = this;
	vm.formTitle = 'New Co-Op Form';

	var studentId = $routeParams.id;

	vm.submit = function(){
		StudentFactory.add_coop({id: studentId},
			{coop: vm.coop}, function(res){
			$location.path('/students/' + studentId)
		})
	}
}

module.exports = CoopNewController;