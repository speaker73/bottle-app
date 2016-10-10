var controllerModule = angular.module('blank.controllers', []);
controllerModule.controller("catchCtrl", function($scope){
		
}) 
controllerModule.controller("bottleCtrl", function($scope, $http, $ionicPopup){
		$scope.bottle = {};
		$scope.showAlert = function(title, text) {
    		$ionicPopup.alert({
      		title: title,
      		template: text
    		});
  		};
		$scope.bottleCatcher = function(){
			$http({
      				url:'http://192.168.0.101/bottle/public/api/bottles',
      				/*method: "GET",
     			 	params: {"table":"exoplanets", "select":"pl_hostname,pl_letter,pl_discmethod,ra,dec","format":"json"}*/
    			})
			.success(function(data, status, headers, config){
				$scope.bottle = data;
			})
			.error(function(data, status, heagers, config){
				$scope.showAlert(status, data);
			})
		};
		$scope.bottleStore = function(){
			$http({
      				url:'http://192.168.0.101/bottle/public/api/bottles',
      				method: "post",
     			 	params: {"title":"exoplanets", "author":"Cather"}
    			})
			.success(function(data, status, headers, config){
				
			})
			.error(function(data, status, heagers, config){
				$scope.showAlert(status, data);
			})
		};
		$scope.bottleUpdate = function(){
			$http({
      				url:'http://192.168.0.101/bottle/public/api/bottles/1',
      				method: "put",
     			 	params: {"title":"exoplanets", "author":"Cather"}
    			})
			.success(function(data, status, headers, config){
				
			})
			.error(function(data, status, heagers, config){
				$scope.showAlert(status, data);
			})
		};
});