function LoginDirective() {
    return {
        templateUrl: 'app/templates/login.html',
        restrict: 'E',
        scope: {},
        controller: 'LoginController',
        controllerAs: 'login_ctrl'
    };
}

module.exports = LoginDirective;