'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieDeleteCtrl
 * @description
 * # MovieDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ResDeleteCtrl', function (
  	$scope,
  	$routeParams,
  	Residents,
  	$location
  ) {
    $scope.resident = Residents.one($routeParams.id).get().$object;
    $scope.deleteRes = function(){
    	$scope.resident.remove().then(function(){
    		$location.path('/res');
    	});
    
    };
    $scope.back = function(){
    	$location.path('/res/'+$routeParams.id);
    };

 });
