'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieEditCtrl
 * @description
 * # MovieEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ResEditCtrl', function (
  	$scope,
  	$routeParams,
  	Residents,
  	$location
  	) {
    $scope.editRes = true;
    $scope.residents ={};
    Residents.one($routeParams.id).get().then(function(resident){
    	$scope.residents = resident;
    	$scope.saveRes = function(){
    		$scope.residents.save().then(function(){
    			$location.path('/res'+$routeParams.id);
    		});
    	};
    });
  });
