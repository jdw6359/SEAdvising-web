'use strict'

/*
LabelNewController shares an interface with LabelEditController
This allows for both controllers to interact with a single template
Both are expected to implement the following:
State:
	vm.header_title
	vm.label
Behavior:
	vm.submit()
*/
LabelNewController.$inject = ['LabelFactory', '$location'];
function LabelNewController(LabelFactory, $location) {
	
	var vm = this;

	// Set the page header for the new label form
	vm.header_title = "New Label Form";

	// Initialize a basic label (to demonstrate the example label)
	vm.label = {
		name: "New Label",
		color: "#808080"
	};

	// New label form submission listener
	vm.submit = function(){
		LabelFactory.save({label: vm.label}, function(res) {
			$location.path("/settings/labels");
		}, function(err) {
			alert("The label could not be created");
		});
	};
}

module.exports = LabelNewController;
