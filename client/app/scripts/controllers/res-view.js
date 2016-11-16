'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ResViewCtrl', function (
  	$scope, 
  	$routeParams,
  	Residents
 	) {
    $scope.viewRes = true;
    $scope.resident = Residents.one($routeParams.id).get().$object;
});
