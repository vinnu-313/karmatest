'use strict';

describe("Application Test : ", function(){
	
	var module;
	beforeEach(function(){
		module = angular.module('gbApp');
	});
	
	it("Is gbApp module exists ??", function(){
		expect(module).not.toBeNull();
	});
	
	describe("Testing dependecies : ", function(){
		var deps;
		var hasModule = function(m){
			return deps.indexOf(m) >=0; 
		};
		
		beforeEach(function(){
			deps = module.value("gbApp").requires;
		});
		
		it("Should have gbApp.controllers", function(){
			expect(hasModule("gbApp.controllers")).toBeTruthy();
		});
		
		it("Should have gbApp.directives", function(){
			expect(hasModule("gbApp.directives")).toBeTruthy();
		});
		
		it("Should have gbApp.services", function(){
			expect(hasModule("gbApp.services")).toBeTruthy();
		});
		
		it("Should have gbApp.filters", function(){
			expect(hasModule("gbApp.filters")).toBeTruthy();
		});
		
		it("Should have ngRoute", function(){
			expect(hasModule("ngRoute")).toBeTruthy();
		});
		
	});
});
