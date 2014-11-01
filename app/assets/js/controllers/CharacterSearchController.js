/**
 * Character Search Controller.  Searches for a character
 */
angular.module('RaidBuilder').controller('CharacterSearchController', function ($scope, $location, character) {

  $scope.search = {};
  $scope.error = {};

  $scope.doSearch = function () {
    $scope.error = {};

    if ($scope.searchForm.$valid) {
      character($scope.search.realm, $scope.search.character).then(function (data) {
        $scope.character = data;
      }, function (response) {
        $scope.character = null;
        $scope.error.response = response;
      });
    }
  };
});