'use strict';

LoginController.$inject = ['$scope', '$rootScope', '$location', 'AUTH_EVENTS', 'AuthService'];
function LoginController($scope, $rootScope, $location, AUTH_EVENTS, AuthService){

	console.log("scope test name: " + $scope.testName)

	var vm = this;

	vm.credentials = {
		email: "",
		password: ""
	}

	vm.login = function(credentials){
		AuthService.login(credentials).then(function(user){
			
			console.log("auth service returned successful in login.js");

			$scope.setCurrentUser(user);

			//TODO: Refactor this hardcoded redirection
			$location.path('/')
		}, function(){

			console.log("auth service returned failure in login.js");
			//TODO: refactor into hardcoded redirection
		});
	};
}

module.exports = LoginController;