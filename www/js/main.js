'use strict';

require('angular/angular');
require('angular-route');

var homepage = angular.module('homepage', ['ngRoute']);

//controllers
require('./controllers/controller')(homepage);

//directives
require('./directives/directives')(homepage);

//pageview routing
homepage.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'templates/home.html'
    })
    .when('/feedback', {
      templateUrl: 'templates/feedback.html',
      controller: 'feedbackController'
    })
    .when('/', {
      redirectTo: '/home'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);
