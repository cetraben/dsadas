angular.module('RaidBuilder').controller('CharacterViewController', function ($scope, character, realm, name) {

  $scope.error = {};

  character(realm, name, ['items','talents']).then(function (data) {
    $scope.error = {};
    $scope.character = data;

  }, function (response) {
    $scope.error.response = response;
  });

});