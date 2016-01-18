'use-strict'

CoopNewController.$inject = ['$location', '$routeParams', 'StudentFactory'];
function CoopNewController($location, $routeParams, StudentFactory){
	
	var vm = this;
	vm.coop = {};

	vm.submit = function(){
		var student_id = $routeParams.id;
		StudentFactory.add_coop({id: student_id},
			{coop: vm.coop}, function(res){
			$location.path('/students/' + student_id)
		})
	}
}

module.exports = CoopNewController;