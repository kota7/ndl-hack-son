'use strict';

angular.module('exampleApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.events = [];
    $scope.selects = [];

    //議員選択
    $scope.select = function select(id) {
      console.log(id);
    }

    $http.get('/api/events').success(function(event) {
      $scope.events = event.data;
    });

  });
