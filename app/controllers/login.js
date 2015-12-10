'use strict';

LoginController.$inject = ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService'];
function LoginController($scope, $rootScope, AUTH_EVENTS, AuthService){
	
	var vm = this;

	vm.credentials = {
		email: "",
		password: ""
	}

	vm.login = function(){
		console.log("Login Button Pressed");

		AuthService.login(vm.credentials).then(function(user){
			
			console.log("auth service returned successful in login.js");

			$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
			$scope.setCurrentUser(user);
		}, function(){

			console.log("auth service returned failure in login.js");

			$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
		});
	};
}

module.exports = LoginController;