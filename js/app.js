
var appMarvel = angular.module('appMarvel', []);

appMarvel.controller('MarvelListCtrl', function($scope, $http){
	$http.get('http://gateway.marvel.com:80/v1/public/comics?format=comic&formatType=comic&dateRange=2011-01-01%2C2013-11-11&ts=1&apikey=2cf2798f7928f54962306dbe35e4ce02&hash=1199e3de03ab4729560885059d25a057').success(function(data){
		$scope.series = data.data.results;
		console.log(data.data.results);
	});
	$scope.nombre = "Dario";

});