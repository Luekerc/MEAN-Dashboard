'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ResCtrl', function ($scope, Residents) {
    // the restangular website has the documentation for getList() and other methods
    $scope.residents = Residents.getList().$object;
  });
