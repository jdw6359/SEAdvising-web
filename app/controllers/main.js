'use strict';

MainController.$inject = ['$scope'];
function MainController($scope){
	console.log("main controller");

	this.name = "Josh"
}

module.exports = MainController;