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

angular
  .module('sea', [
    require('angular-animate'),
    require('angular-cookies'),
    require('angular-resource'),
    require('angular-route'),
    require('angular-touch'),
    require('angular-loading-bar'),
    require('angular-ui-bootstrap')
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
      .when('/email_verification',{
        templateUrl: 'app/views/email_verification.html',
        controller: 'EmailVerificationController', 
        controllerAs: 'email_verification_ctrl',
        data: {
          requiresAuthentication: false
        }
      })
      .when('/password_reset/:id',{
        templateUrl: 'app/views/password_reset.html',
        controller: 'PasswordResetController',
        controllerAs: 'password_reset_ctrl',
        data: {
          requiresAuthentication: false
        }
      })
      .when('/students/new',{
        templateUrl: 'app/views/student_new.html',
        controller: 'StudentNewController',
        controllerAs: 'student_new_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor, USER_ROLES.worker]
        }
      })      
      .when('/students',{
        templateUrl: 'app/views/student_list.html',
        controller: 'StudentListController',
        controllerAs: 'student_list_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor, USER_ROLES.worker]
        }
      })
      .when('/students/:id',{
        templateUrl: 'app/views/student.html',
        controller: 'StudentController',
        controllerAs: 'student_ctrl',
        data: {
          requiresAuthentication: true,
          authorizedRoles: [USER_ROLES.advisor, USER_ROLES.worker]
        } 
      })
      .otherwise({
        redirectTo: '/'
      });

      $httpProvider.defaults.useXDomain = true;
      // change this when authentication is added (below)
      $httpProvider.defaults.withCredentials = false;                       // change this later!!!!!!!!!!!!
      // change this when authentication is added (above)
      delete $httpProvider.defaults.headers.common["X-Requested-With"];
      $httpProvider.defaults.headers.common["Accept"] = "application/json";
      $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
  })
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

      console.log("setting http header");
      $http.defaults.headers.common["Auth-Token"] = $cookies.get("authToken");
      console.log("header: " + $http.defaults.headers.common["Auth-Token"]);
      console.log("done setting http header");

    })
  });
  
require('./controllers');
require('./directives');
require('./filters');
require('./services');
require('./factories');
