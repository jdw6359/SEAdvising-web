'use strict'

/*
LabelEditController shares an interface with LabelNewController
This allows for both controllers to interact with a single template
Both are expected to implement the following:
State:
	vm.header_title
	vm.label
Behavior:
	vm.submit()
*/
LabelEditController.$inject = ['LabelFactory', '$location', '$routeParams'];
function LabelEditController(LabelFactory, $location, $routeParams) {
	
	var vm = this;

	// Set the page header for the label form
	vm.header_title = "Edit Label Form";

	// Get the existing Label based on the :id
	var labelId = $routeParams.id;
	vm.label = LabelFactory.get({id: labelId});

	// Edit label form submission listener
	vm.submit = function(){
		LabelFactory.update({id: labelId}, {label: vm.label}, function(res) {
			$location.path('/settings/labels');
		}, function(err) {
			alert("The label could not be updated");
		})
	};
}

module.exports = LabelEditController;
