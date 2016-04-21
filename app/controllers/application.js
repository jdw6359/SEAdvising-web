'use strict';

ApplicationController.$inject = ['$scope', '$cookies', '$location', 'USER_ROLES', 'AuthService'];
function ApplicationController($scope, $cookies, $location, USER_ROLES, AuthService){

	console.log('application controller hit');

	$scope.currentUser = null;
	$scope.userRoles = USER_ROLES;
	$scope.authToken = AuthService.authToken;
	$scope.isAuthorized = AuthService.isAuthorized;


	if(!$scope.currentUser && $cookies.get("authToken")){
		var authToken = $cookies.get("authToken");
		AuthService.restore(authToken).then(function(user){
			$scope.setCurrentUser(user);
			$location.path('/')
		})
	}

	$scope.setCurrentUser = function(user){
		$scope.currentUser = user;
	};

	$scope.logout = function(){
		$scope.currentUser = null;
		AuthService.logout();
		$location.path('/login');
	}
};

module.exports = ApplicationController;