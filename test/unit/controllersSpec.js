'use strict';

/* jasmine specs for controllers go here */

describe('MenuCtrl', function() {

	beforeEach(module('gbApp.controllers'));

	it('Should have menu', inject(function($rootScope, $controller, $httpBackend) {
		var $scope = $rootScope.$new();
		$httpBackend.when('GET', 'statconfig/menuconfig.json').respond([1,2,3]);
		var ctrl = $controller('MenuCtrl', {
			'$scope' : $scope
		});
		expect($scope.menu).toBeDefined();
		$httpBackend.flush();
		expect($scope.menu).toBeDefined();
		expect($scope.menu).toEqual([1,2,3]);
		
	}));
});
