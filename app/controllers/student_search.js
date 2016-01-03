'use-strict'

StudentSearchController.$inject = ['$location', 'StudentFactory'];
function StudentSearchController($location, StudentFactory){
	
	var vm = this;

	vm.onSelect = function($item, $model, $label){
		//when a value is selected, clear the search box
		vm.student = "";
		$location.path('/students/' + $item.id);
	}

	vm.getStudents = function(filter){

		return StudentFactory.search({filter: filter}).$promise.then(function(response){			
			return response.map(function(student){
				return student;
			})
		})
	}
}

module.exports = StudentSearchController;