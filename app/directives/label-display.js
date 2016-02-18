'use-strict'

function LabelDisplayDirective(){
	return {
		templateUrl: 'app/templates/label-display.html',
		restrict: 'E',
		bindToController: {
			student: '=',
			detail: '='
		},
		controller: ['$uibModal', LabelDisplayController],
		controllerAs: 'label_display_ctrl'
	}
}

function LabelDisplayController($uibModal){

	var vm = this;

	vm.editLabels = function() {

		var labelModalInstance = $uibModal.open({
			templateUrl: 'app/templates/modals/edit-labels.html',
			controller: 'EditLabelsController',
			controllerAs: 'edit_labels_ctrl',
			resolve: {
				student: function () {
					return vm.student;
				}
			}
		});

		labelModalInstance.result.then(function (res) {
			console.log("this is a callback for when the modal is closed");
			console.log("this is the response from the closing event: ");
			console.log(res);
		})
	}

}

module.exports = LabelDisplayDirective;