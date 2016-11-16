'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ResAddCtrl', function ($scope, Residents, $location
  	) {
    $scope.residents = {};
 	$scope.saveRes = function(){
 		var resList = [];
 		Residents.getList().then(function(list){
 			for(var i = 0; i<list.length; i++){
 				if(list[i].name){
 					resList.push(list[i]);
 				}
 			}
 		});

 		var person = [];

 		for(var i = 0; i<resList.length; i++){
 			if(resList[i].name === $scope.residents.name){
 				person.push(resList[i]);
 			}
 		}
 		
 		var num = parseFloat($scope.residents.hours);
 		var max = 24;
 		if( num > max ){
 			$scope.residents.problems = "Exceeded 24 hour limit";
 		}

 		Residents.post($scope.residents).then(function(){
 			$location.path('/res');
 		});
 	};
 	// });
  });
// var thisName = Residents.one($routeParams.id).get().$object;