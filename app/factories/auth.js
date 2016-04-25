'use strict';

AuthService.$inject = ['$http', 'Session', '$rootScope', '$q', 'AUTH_EVENTS', 'BASE_API_ENDPOINT'];
function AuthService($http, Session, $rootScope, $q, AUTH_EVENTS, BASE_API_ENDPOINT){
    
    var authService = {};
    var deferred = $q.defer();

    authService.verify = function(){
        console.log('auth service verify invoked');
        if(Session.user){
            console.log('session.user is valid, resolving session...');
            deferred.resolve(Session);
        }else{
            console.log('session.user is NOT valid, need to restore session');
            authService.restore()
                .then(success)
                .catch(failure);
        }

        function success(response){
            console.log('auth service verify success invoked...');
            console.log(response);

            var data = res.data;
            Session.create(data.auth_token,
            data.user_role, data.user);

            console.log('created session in auth service verify...');
            deferred.resolve(Session);
        }

        function failure(response) {
            console.log('auth service verify failure invoked...');
            console.log(response);

            $rootScope.$broadcast(AUTH_EVENTS.FAILED);
        }
    }


    //TODO: do not include auth_token as parameter, 
    //rely on global http header assignment
    authService.restore = function(){
        console.log('auth service restore invoked...');
        console.log('auth token: ');
        var authToken = $cookies.get('authToken');

        return $http.post(BASE_API_ENDPOINT + '/sessions/restore', {'authToken': authToken});
    }

    authService.login = function(credentials){
        return $http
            .post(BASE_API_ENDPOINT + '/sessions', credentials)
            .then(function(res){
                var data = res.data;
                Session.create(data.auth_token,
                    data.user_role, data.user);
            });
    };

/*
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
*/


    return authService;
}

module.exports = AuthService;