'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    // this next piece needs to point to the rest api serve
    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        // controllerAs: 'main'
      })
      .when('/staff', {
        templateUrl: 'views/staff.html',
        controller: 'StaffCtrl'
        // controllerAs: 'staff'
      })
      .when('/res', {
        templateUrl: 'views/res.html',
        controller: 'ResCtrl'
        // controllerAs: 'movies'
      })
      .when('/create/res', {
        templateUrl: 'views/res-add.html',
        controller: 'ResAddCtrl'
        // controllerAs: 'movieAdd'
      })
      .when('/res/:id', {
        templateUrl: 'views/res-view.html',
        controller: 'ResViewCtrl',
        // controllerAs: 'movieView'
      })
      .when('/res/:id/delete', {
        templateUrl: 'views/res-delete.html',
        controller: 'ResDeleteCtrl',
        // controllerAs: 'movieDelete'
      })
      .when('/res/:id/edit', {
        templateUrl: 'views/res-edit.html',
        controller: 'ResEditCtrl',
        // controllerAs: 'movieEdit'
      })
      .when('/staff', {
        templateUrl: 'views/staff.html',
        controller: 'StaffCtrl',
        controllerAs: 'staff'
      })
      .when('/res-view', {
        templateUrl: 'views/res-view.html',
        controller: 'ResViewCtrl',
        controllerAs: 'resView'
      })
      .when('/res-edit', {
        templateUrl: 'views/res-edit.html',
        controller: 'ResEditCtrl',
        controllerAs: 'resEdit'
      })
      .when('/res-delete', {
        templateUrl: 'views/res-delete.html',
        controller: 'ResDeleteCtrl',
        controllerAs: 'resDelete'
      })
      .when('/res-add', {
        templateUrl: 'views/res-add.html',
        controller: 'ResAddCtrl',
        controllerAs: 'resAdd'
      })
      .when('/res-nav', {
        templateUrl: 'views/res-nav.html',
        controller: 'ResNavCtrl',
        controllerAs: 'resNav'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('ResidentRestangular', function(Restangular){
    return Restangular.withConfig(function(RestangularConfigurer){
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Residents', function(ResidentRestangular){
    return ResidentRestangular.service('movie');
  });

