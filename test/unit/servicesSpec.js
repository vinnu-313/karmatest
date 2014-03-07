'use strict';

/* jasmine specs for services go here */

describe('Testing Services', function() {

	beforeEach(module('gbApp.services'));


	it("MenuService", inject(function(MenuService, $httpBackend) {
		expect($httpBackend).toBeDefined();
		$httpBackend.expect('GET', 'statconfig/menuconfig.json').respond([1, 2, 3]);
		expect(MenuService).not.toBeNull();
		var data;
		expect(data).toBeUndefined();
		MenuService.getConfig().then(function(response) {
			data = response.data;
		}, function(response) {
			data = response.data;
		});
		expect(data).toBeUndefined();
		$httpBackend.flush();
		expect(data).toBeDefined();
		expect(data).toEqual([1,2,3]);
	}));

});
