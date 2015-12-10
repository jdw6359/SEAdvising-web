'use strict';

LoginController.$inject = ['$scope'];
function LoginController($scope){
	console.log("login controller");

	this.login = function(){
		console.log("Login Button Pressed");
	}
}

module.exports = LoginController;