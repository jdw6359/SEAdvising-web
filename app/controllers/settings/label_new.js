'use strict'

LabelNewController.$inject = ['LabelFactory', '$location'];

function LabelNewController(LabelFactory, $location) {
	
	var vm = this;

	vm.header_title = "New Label Form";

	vm.label = {
		name: "New Label",
		color: "#808080"
	};

	vm.submit = function(){
		console.log("label new controller submit invoked");
		LabelFactory.save({label: vm.label}, function(res) {
			$location.path("/settings/labels");
		}, function(err) {
			alert("The label could not be created");
		});
	};
}

module.exports = LabelNewController;
