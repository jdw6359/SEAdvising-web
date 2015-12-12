'use strict';

AuthService.$inject = ['$http', 'Session', 'BASE_API_ENDPOINT'];
function AuthService($http, Session, BASE_URL){
	
	var authService = {};

	authService.authToken = function(){
		return Session.authToken;
	};

	authService.login = function(credentials){
		return $http
			.post(BASE_URL + '/sessions', credentials)
			.then(function(res){
				Session.create(res.data.auth_token,
					res.data.user_role);
				return res.data.user;
			});
	};

	authService.isAuthenticated = function(){
		return !!Session.authToken;
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