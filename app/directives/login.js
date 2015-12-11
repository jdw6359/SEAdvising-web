function LoginDirective() {
    return {
        templateUrl: 'app/templates/login.html',
        restrict: 'E',
        transclude: true,
        controller: 'LoginController',
        controllerAs: 'login_ctrl'
    };
}

module.exports = LoginDirective;