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

		labelModalInstance.result.then(function (student) {
			//set vm.student to what is returned from the modal instance closing event
			vm.student = student;
		})
	}

}

module.exports = LabelDisplayDirective;