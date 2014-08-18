'use strict';

/**
 * @ngdoc function
 * @name scaredycatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scaredycatApp
 */
angular.module('scaredycatApp')
<<<<<<< HEAD
	.controller('MainCtrl', function ($scope, $location, userInfo) {
		$scope.user = '';
		$scope.$watch('user', function (newValue) {
			if (newValue !== '') {
				userInfo.setUsername(newValue);
				$location.path('/game');
=======
	.controller('MainCtrl', function ($scope) {
		$scope.user = '';
		$scope.$watch('user', function (newValue, oldValue) {
			if (newValue !== '') {
				console.log('user');
				console.log('redirect to /game');
>>>>>>> c67e0e2074ae5ca19c9e80bc6807b9ef0a443fdd
			}
		});
	});