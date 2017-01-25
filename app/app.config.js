'use strict';

angular.
  module('practiceTracker').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          template: '<home></home>'
        }).
        when('/login', {
          template: '<login></login>'
        }).
        when('/today', {
          template: '<today-view></today-view>'
        }).
        when('/exercises', {
          template: '<exercise-view></exercise-view>'
        }).
        when('/repertoire', {
          template: '<repertoire-view></repertoire-view>'
        }).
        when('/repertoire/:slug', {
          template: '<detail-view></detail-view>'
        }).
        when('/exercise/:slug', {
          template: '<detail-view></detail-view>'
        }).
        otherwise('/home');
    }
  ]);
