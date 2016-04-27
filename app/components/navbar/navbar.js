'use strict';

NavbarController.$inject = ['USER_ROLES', 'Session', '$state'];
function NavbarController(USER_ROLES, Session, $state) {    
    var vm = this;

    vm.USER_ROLES = USER_ROLES;
    vm.isAuthenticated = isAuthenticated;
    vm.hasRole = hasRole;
    vm.logout = logout;

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

    // Wipe contents of session and transition state
    function logout() {
        Session.destroy();
        $state.go('sea.login');
    }
}
module.exports = NavbarController;
