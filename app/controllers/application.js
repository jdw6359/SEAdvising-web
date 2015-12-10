'use-strict';

ApplicationController.$inject = ['$scope', 'USER_ROLES', 'AuthService'];
function ApplicationController($scope, USER_ROLES, AuthService){
	console.log("Application Controller Loaded");

	var vm = this;

	vm.currentUser = null;
	vm.userRoles = USER_ROLES;
	vm.isAuthorized = AuthService.isAuthorized;

	this.setCurrentUser = function(user){
		console.log("set current user invoked");
		vm.currentUser = user;
	};
};

module.exports = ApplicationController;