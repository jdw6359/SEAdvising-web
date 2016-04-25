'use strict';

LoginController.$inject = ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService'];
function LoginController($scope, $rootScope, AUTH_EVENTS, AuthService){

	var vm = this;

	console.log('login controller invoked');

	vm.credentials = {
		email: "",
		password: ""
	}

	vm.login = function(){

		AuthService.login(vm.credentials).then(function() {
			
			console.log("auth service returned successful in login.js");

			console.log('broadcasting success event...');
			$rootScope.$broadcast(AUTH_EVENTS.SUCCESS);
			console.log('done broadcasting success event...');
		}, function(){
			// Broadcast Auth Failure event for app listener to handle
			$rootScope.$broadcast(AUTH_EVENTS.FAILED);
		});

	};
}

module.exports = LoginController;