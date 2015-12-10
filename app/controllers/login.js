'use strict';

LoginController.$inject = ['$rootScope', 'AUTH_EVENTS', 'AuthService'];
function LoginController($rootScope, AUTH_EVENTS, AuthService){

	var vm = this;

	vm.credentials = {
		email: "",
		password: ""
	}

	vm.login = function(credentials){
		AuthService.login(credentials).then(function(user){
			
			console.log("auth service returned successful in login.js");

			$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
			vm.setCurrentUser(user);
		}, function(){

			console.log("auth service returned failure in login.js");

			$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
		});
	};
}

module.exports = LoginController;