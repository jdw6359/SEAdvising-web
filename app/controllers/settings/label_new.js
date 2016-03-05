'use strict'

LabelNewController.$inject = ['LabelFactory', '$location'];

function LabelNewController(LabelFactory, $location) {
	
	var vm = this;

	vm.header_title = "New Label Form";

	vm.label = {};

	vm.submit = function(){
		console.log("label new controller submit invoked");
	};
}

module.exports = LabelNewController;
