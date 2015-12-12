'use-strict';

ApplicationController.$inject = ['$scope', 'USER_ROLES', 'AuthService'];
function ApplicationController($scope, USER_ROLES, AuthService){
	console.log("Application Controller Loaded");

	$scope.currentUser = null;
	$scope.userRoles = USER_ROLES;
	$scope.authToken = AuthService.authToken;
	$scope.isAuthorized = AuthService.isAuthorized;

	$scope.setCurrentUser = function(user){
		console.log("set current user invoked");
		$scope.currentUser = user;
	};
};

module.exports = ApplicationController;