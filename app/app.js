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

angular
  .module('sea', [
    require('angular-animate'),
    require('angular-cookies'),
    require('angular-resource'),
    require('angular-route'),
    require('angular-touch')
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
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainController',
        controllerAs: 'main_ctrl'
      })
      .when('/login', {
        templateUrl: 'app/views/login.html',
        controller: 'LoginController',
        controllerAs: 'login_ctrl'
      })
      .when('/email_verification',{
        templateUrl: 'app/views/email_verification.html',
        controller: 'EmailVerificationController', 
        controllerAs: 'email_verification_ctrl'
      })
      .when('/password_reset/:id',{
        templateUrl: 'app/views/password_reset.html',
        controller: 'PasswordResetController',
        controllerAs: 'password_reset_ctrl'
      })
      .when('/students',{
        templateUrl: 'app/views/student_list.html',
        controller: 'StudentListController',
        controllerAs: 'student_list_ctrl'
      })
      .when('/students/new/',{
        templateUrl: 'app/views/student_new.html',
        controller: 'StudentNewController',
        controllerAs: 'student_new_ctrl'
      })
      .when('/students/:id',{
        templateUrl: 'app/views/student.html',
        controller: 'StudentController',
        controllerAs: 'student_ctrl' 
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
  });
  
require('./controllers');
require('./directives');
require('./filters');
require('./services');
require('./factories');
