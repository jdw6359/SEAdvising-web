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
  .module('seadvising', [
    require('angular-animate'),
    require('angular-cookies'),
    require('angular-resource'),
    require('angular-route'),
    require('angular-touch')
  ])
  .constant('BASE_API_ENDPOINT', 'http://localhost:3000/api/v1')
  .config(function ($routeProvider) {
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
      .otherwise({
        redirectTo: '/'
      });
  });

require('./controllers')
require('./directives')
require('./filters')
require('./services')
