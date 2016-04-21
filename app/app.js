'use strict';

/**
 * @ngdoc overview
 * @name sea
 * @description
 * # seadvisingApp
 *
 * Main module of the application.
 */
global.jQuery = require('jquery')
var angular = require('angular');

require('bootstrap');
require('../node_modules/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js');

angular
  .module('sea', [
    require('angular-animate'),
    require('angular-cookies'),
    require('angular-resource'),
    require('angular-ui-router'),
    require('angular-touch'),
    require('angular-loading-bar'),
    require('angular-ui-bootstrap'),
    require('angular-utils-pagination'),
    'colorpicker.module'
  ])
  .constant('BASE_API_ENDPOINT', 'http://localhost:3000/api/v1')
  .constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  })
  .constant('USER_ROLES', {
    all: '*',
    advisor: 'Advisor',
    worker: 'Worker'
  })
  .config(configure)
  .run(start);

configure.$inject = ['$stateProvider', '$urlRouterProvider'];
function configure($stateProvider, $urlRouterProvider) {
  console.log('configure started');
  $urlRouterProvider.when('', '/');

  $urlRouterProvider.otherwise(
      function($injector, $location) {
          var $state = $injector.get('$state');
          console.log($state);
          $state.go('sea.not-found');
          return $location.path();
      }
  );

  $stateProvider
    .state('sea', {
      abstract: true,
      template: '<ui-view />'
    })
      .state('sea.home', {
        url: '/',
        templateUrl: 'app/views/main.html',
        controller: 'MainController',
        controllerAs: 'main_ctrl',
        data: {
          requiresAuthentication: false
        }
      })
      .state('sea.login', {
        url: '/login',
        templateUrl: 'app/views/login.html',
        controller: 'LoginController',
        controllerAs: 'login_ctrl',
        data: {
          requiresAuthentication: false
        }
      })

/*
  $httpProvider.defaults.useXDomain = true;
  // change this when authentication is added (below)
  $httpProvider.defaults.withCredentials = false;                       // change this later!!!!!!!!!!!!
  // change this when authentication is added (above)
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  $httpProvider.defaults.headers.common["Accept"] = "application/json";
  $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
*/
}

start.$inject = ['$rootScope', '$state', '$http', '$cookies', '$location'];
function start($rootScope, $state, $http, $cookies, $location) {
  console.log('start started');

  $rootScope.$on(
    '$stateChangeStart',
    function (event, toState) {
      console.log('state change start')
      console.log('new state - requires authentication: ');
      console.log(toState.data.requiresAuthentication);
      console.log(toState.url);
      

      if(toState.data.requiresAuthentication) {
        console.log('requires auth, going to login state');
        event.preventDefault();
        $state.go('sea.login');
      }
    }
  );
}



/*
start.$inject = ['$rootScope', '$state', 'Session'];
function start($rootScope, $state, Session) {
    $rootScope.$on(
        '$stateChangeStart',
        function (event, toState) {
            if (Session.employee && toState.data && toState.data.roles) {
                var hasRole = toState.data.roles.some(function (role) {
                    return Session.employee.hasRole(role);
                });

                if (!hasRole) {
                    event.preventDefault();
                    $state.go('wsa.unauthorized');
                }
            }
        }
    );
}
*/

/*
  .config(function ($routeProvider, $httpProvider, USER_ROLES) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainController',
        controllerAs: 'main_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor, USER_ROLES.worker]
        }
      })
      .when('/login', {
        templateUrl: 'app/views/login.html',
        controller: 'LoginController',
        controllerAs: 'login_ctrl',
        data: {
          requiresAuthentication: false
        }
      })
      .when('/email_verification', {
        templateUrl: 'app/views/email_verification.html',
        controller: 'EmailVerificationController', 
        controllerAs: 'email_verification_ctrl',
        data: {
          requiresAuthentication: false
        }
      })
      .when('/password_reset/:id', {
        templateUrl: 'app/views/password_reset.html',
        controller: 'PasswordResetController',
        controllerAs: 'password_reset_ctrl',
        data: {
          requiresAuthentication: false
        }
      })
      .when('/settings/labels', {
        templateUrl: 'app/views/settings/labels.html', 
        controller: 'LabelsController',
        controllerAs: 'labels_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor]
        }
      })
      .when('/settings/label/new', {
        templateUrl: 'app/views/settings/label_form.html',
        controller: 'LabelNewController',
        controllerAs: 'label_form_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor]
        }
      })
      .when('/settings/label/:id/edit', {
        templateUrl: 'app/views/settings/label_form.html',
        controller: 'LabelEditController',
        controllerAs: 'label_form_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor]
        }
      })
      .when('/students/new', {
        templateUrl: 'app/views/student_form.html',
        controller: 'StudentNewController',
        controllerAs: 'student_form_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor, USER_ROLES.worker]
        }
      })
      .when('/students/:id/edit', {
        templateUrl: 'app/views/student_form.html',
        controller: 'StudentEditController',
        controllerAs: 'student_form_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor, USER_ROLES.worker]
        }
      })
      .when('/students', {
        templateUrl: 'app/views/student_list.html',
        controller: 'StudentListController',
        controllerAs: 'student_list_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor, USER_ROLES.worker]
        }
      })
      .when('/students/:id', {
        templateUrl: 'app/views/student.html',
        controller: 'StudentController',
        controllerAs: 'student_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor, USER_ROLES.worker]
        } 
      })
      .when('/students/:id/audits/new', {
        templateUrl: 'app/views/audit_new.html',
        controller: 'AuditNewController',
        controllerAs: 'audit_new_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor, USER_ROLES.worker]
        }
      })
      .when('/students/:id/program_detail/new', {
        templateUrl: 'app/views/details/program_detail_form.html',
        controller: 'ProgramDetailNewController',
        controllerAs: 'program_detail_form_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor, USER_ROLES.worker]
        }
      })
      .when('/students/:id/program_detail/edit', {
        templateUrl: 'app/views/details/program_detail_form.html',
        controller: 'ProgramDetailEditController',
        controllerAs: 'program_detail_form_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor, USER_ROLES.worker]
        }
      })
      .when('/students/:id/cop_out/new', {
        templateUrl: 'app/views/details/cop_out_form.html',
        controller: 'CopOutNewController',
        controllerAs: 'cop_out_form_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor, USER_ROLES.worker]
        }
      })
      .when('/students/:id/cop_out/edit', {
        templateUrl: 'app/views/details/cop_out_form.html',
        controller: 'CopOutEditController',
        controllerAs: 'cop_out_form_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor, USER_ROLES.worker]
        }
      })
      .when('/students/:id/cop_in/new', {
        templateUrl: 'app/views/details/cop_in_form.html',
        controller: 'CopInNewController',
        controllerAs: 'cop_in_form_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor, USER_ROLES.worker]
        }
      })
      .when('/students/:id/cop_in/edit', {
        templateUrl: 'app/views/details/cop_in_form.html',
        controller: 'CopInEditController',
        controllerAs: 'cop_in_form_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor, USER_ROLES.worker]
        }
      })
      .when('/students/:id/senior_project/new', {
        templateUrl: 'app/views/details/senior_project_form.html',
        controller: 'SeniorProjectNewController',
        controllerAs: 'senior_project_form_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor, USER_ROLES.worker]
        }
      })
      .when('/students/:id/senior_project/edit', {
        templateUrl: 'app/views/details/senior_project_form.html',
        controller: 'SeniorProjectEditController',
        controllerAs: 'senior_project_form_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor, USER_ROLES.worker]
        }
      })
      .when('/students/:id/coops/new', {
        templateUrl: 'app/views/details/coop_form.html',
        controller: 'CoopNewController',
        controllerAs: 'coop_form_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor, USER_ROLES.worker]
        }
      })
      .when('/students/:id/coops/:coop_id/edit', {
        templateUrl: 'app/views/details/coop_form.html',
        controller: 'CoopEditController',
        controllerAs: 'coop_form_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor, USER_ROLES.worker]
        }
      })
      .when('/students/:id/labels', {
        templateUrl: 'app/views/student_labels.html',
        controller: 'StudentLabelsController',
        controllerAs: 'student_labels_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor]
        }
      })
      .otherwise({
        redirectTo: '/'
      });

  })
  */
  /*
  .run(function($rootScope, $http, $cookies, $location, AuthService){
    $rootScope.$on('$routeChangeStart', function(event, next){

      var requiresAuthentication = next.data.requiresAuthentication;
      var authorizedRoles = next.data.authorizedRoles;
      
      if(requiresAuthentication){
        if(!AuthService.isAuthorized(authorizedRoles)){
          event.preventDefault();
          if(AuthService.isAuthenticated()){
            //user's role is not authorized to access route
            $location.path('/');
          } else {
            //user is not logged in
            $location.path('/login');            
          }
        }
      }
      $http.defaults.headers.common["Auth-Token"] = $cookies.get("authToken");
    })
  });
  */
  
require('./controllers');
require('./directives');
require('./filters');
require('./services');
require('./factories');
