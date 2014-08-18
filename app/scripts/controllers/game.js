'use strict';

/**
 * @ngdoc function
 * @name scaredycatApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the scaredycatApp
 */
angular.module('scaredycatApp')
<<<<<<< HEAD
	.controller('GameCtrl', function ($scope, userInfo) {
		$scope.username = userInfo.getUsername();
		$scope.card = 'bird2';
	});
=======
  .controller('GameCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
>>>>>>> c67e0e2074ae5ca19c9e80bc6807b9ef0a443fdd
