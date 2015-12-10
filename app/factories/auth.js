'use strict';

AuthService.$inject = ['$http', 'Session', 'BASE_API_ENDPOINT'];
function AuthService($http, Session, BASE_URL){
	
	var authService = {};

	authService.login = function(credentials){
		console.log("login credentials: ");
		console.log(credentials);

		return $http
			.post(BASE_URL + '/sessions', credentials)
			.then(function(res){

				console.log("session http response: ");
				console.log(res);

				Session.create(res.data.auth_token,
					res.data.user.type);
				return res.data.user;
			});
	};

	authService.isAuthenticated = function(){
		return !!Session.auth_token;
	}

	authService.isAuthorized = function(authorizedRoles){
		if(!angular.isArray(authorizedRoles)){
			authorizedRoles = [authorizedRoles];
		}
		return (authService.isAuthenticated() &&
			authorizedRoles.indexOf(Session.userRole) !== -1);
	};

	return authService;
}

module.exports = AuthService;