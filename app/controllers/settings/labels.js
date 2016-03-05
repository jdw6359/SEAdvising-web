'use strict'

LabelsController.$inject = ['LabelFactory', '$location'];

function LabelsController(LabelFactory, $location) {
	
	var vm = this;

	vm.labels = LabelFactory.query();

}

module.exports = LabelsController;