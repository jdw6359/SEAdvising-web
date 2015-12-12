'use strict';

/**
 * @ngdoc overview
 * @name seadvisingApp
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
      .when('/students',{
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
