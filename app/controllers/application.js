'use-strict';

ApplicationController.$inject = ['$scope', '$cookies', '$location', 'USER_ROLES', 'AuthService'];
function ApplicationController($scope, $cookies, $location, USER_ROLES, AuthService){
	console.log("Application Controller Loaded");

	$scope.currentUser = null;
	$scope.userRoles = USER_ROLES;
	$scope.authToken = AuthService.authToken;
	$scope.isAuthorized = AuthService.isAuthorized;


	if(!$scope.currentUser && $cookies.get("authToken")){
		var authToken = $cookies.get("authToken");
		console.log("authToken used to make restore: ");
		console.log(authToken);

		console.log("pre restore");
		AuthService.restore(authToken).then(function(user){
			//set current user
			console.log("setting current user");

			$scope.setCurrentUser(user);

			console.log("setting path");
			$location.path('/')

			console.log("done setting path");
		})
		console.log("post restore");
	}


	$scope.setCurrentUser = function(user){
		console.log("set current user invoked");
		$scope.currentUser = user;
	};
};

module.exports = ApplicationController;