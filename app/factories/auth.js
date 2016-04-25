'use strict';

AuthService.$inject = ['$http', 'Session', 'BASE_API_ENDPOINT'];
function AuthService($http, Session, BASE_URL){
	
	var authService = {};

	authService.authToken = function(){
		return Session.authToken;
	};

	//TODO: do not include auth_token as parameter, 
	//rely on global http header assignment
	authService.restore = function(authToken){
		return $http
			.post(BASE_URL + '/sessions/restore', {'authToken': authToken})
			.then(function(res){
				Session.create(res.data.auth_token,
					res.data.user_role);
				return res.data.user
			});
	}

	authService.login = function(credentials){
		return $http
			.post(BASE_URL + '/sessions', credentials)
			.then(function(res){
				var data = res.data
				Session.create(data.auth_token,
					data.user_role, data.user);
			});
	};

	authService.logout = function(){
		Session.destroy();
	}

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