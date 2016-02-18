'use-strict'

function LabelDisplayDirective(){
	return {
		templateUrl: 'app/templates/label-display.html',
		restrict: 'E',
		scope: {
			student: '='
		}
	}
}

module.exports = LabelDisplayDirective;