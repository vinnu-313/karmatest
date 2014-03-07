'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('gbApp.services', []).factory('MenuService', ['$http',
function($http) {
	return {
		getConfig : function() {
			return $http({
				method : 'GET',
				url : 'statconfig/menuconfig.json'
            });
		}
	};
}]);

