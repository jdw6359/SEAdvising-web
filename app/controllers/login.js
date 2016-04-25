'use strict';

LoginController.$inject = ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService'];
function LoginController($scope, $rootScope, AUTH_EVENTS, AuthService){

	var vm = this;

	vm.credentials = {
		email: "",
		password: ""
	}

	vm.login = function(){

		AuthService.login(vm.credentials).then(function(user){
			
			console.log("auth service returned successful in login.js");



//			$scope.setCurrentUser(user);

			//TODO: Refactor this hardcoded redirection
//			$location.path('/')
		}, function(){

			// TODO: Broadcast failed event
			console.log("auth service returned failure in login.js");
			//TODO: refactor into hardcoded redirection
		});

	};
}

module.exports = LoginController;