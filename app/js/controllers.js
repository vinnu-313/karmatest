'use strict';

/* Controllers */

angular.module('gbApp.controllers', ['gbApp.services']).
    controller('MenuCtrl', ['$scope', 'MenuService', function ($scope, MenuService) {

        MenuService.getConfig().then(function (response) {
            $scope.menu = response.data;
        }, function (response) {
            $scope.menu = response.data;
        });
    }]).
    controller('AppCtrl', ['$scope', function ($scope) {

    }]).
    controller('SearchCtrl', ['$scope', function ($scope) {

    }]).
    controller('AnalyticsCtrl', ['$scope', function ($scope) {

    }]);
