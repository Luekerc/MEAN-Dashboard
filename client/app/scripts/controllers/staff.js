'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:StaffCtrl
 * @description
 * # StaffCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('StaffCtrl', function ($scope, Residents) {
    // the restangular website has the documentation for getList() and other methods
    $scope.residents = Residents.getList().$object;
  });
