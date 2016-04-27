'use strict';

AuthenticationController.$inject = ['Session'];
function AuthenticationController(Session) {
    
    console.log('authentication controller invoked');

    var vm = this;

    vm.isAuthenticated = isAuthenticated;
    vm.hasRole = hasRole;

    // Delegete authentication check to Session
    function isAuthenticated() {
        return Session.isAuthenticated();
    }

    // Delegate authorization check to Session
    function hasRole(role) {
        console.log('auth controller hasRole invoked with role: ');
        console.log(role);
        return Session.isAuthorized(role);
    }
}
module.exports = AuthenticationController;
