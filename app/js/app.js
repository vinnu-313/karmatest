'use strict';


// Declare app level module which depends on filters, and services
angular.module('gbApp', [
  'ngRoute',
  'gbApp.filters',
  'gbApp.services',
  'gbApp.directives',
  'gbApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {templateUrl: 'partials/search.html', controller: 'SearchCtrl'});
  $routeProvider.when('/analytics', {templateUrl: 'partials/analytics.html', controller: 'AnalyticsCtrl'});
  $routeProvider.otherwise({redirectTo: '/analytics'});
}]);
