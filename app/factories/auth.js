'use strict';

AuthService.$inject = ['$http', '$cookies', 'Session', '$rootScope', '$q', 'AUTH_EVENTS', 'BASE_API_ENDPOINT'];
function AuthService($http, $cookies, Session, $rootScope, $q, AUTH_EVENTS, BASE_API_ENDPOINT){
    
    var authService = {};

    authService.verify = function(){
        var deferred = $q.defer();

        console.log('auth service verify invoked');
        if(Session.user){
            console.log('session.user is valid, resolving session...');
            deferred.resolve(Session);
        }else{
            console.log('session.user is NOT valid, need to restore session');
            authService.restore()
                .then(success)
                .catch(failure);
            console.log('auth service restore previously invoked...');
        }

        function success(response){
            console.log('auth service verify success invoked...');
            console.log(response);

            var data = response.data;
            Session.create(data.auth_token,
            data.user_role, data.user);

            console.log('created session in auth service verify...');
            deferred.resolve(Session);
        }

        function failure(response) {
            console.log('auth service verify failure invoked...');
            console.log(response);

            $rootScope.$broadcast(AUTH_EVENTS.FAILED);
            deferred.reject(response);
        }

        return deferred;
    }

    //TODO: do not include auth_token as parameter, 
    //rely on global http header assignment
    authService.restore = function(){
        console.log('auth service restore invoked...');
        console.log('auth token: ');
        var authToken = $cookies.get('authToken');
        console.log(authToken);

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

    return authService;
}

module.exports = AuthService;