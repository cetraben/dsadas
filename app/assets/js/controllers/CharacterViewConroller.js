angular.module('RaidBuilder').controller('CharacterViewController', function($scope, $location, character, realm, name, raid) {

  $scope.error = {};

  character(realm, name, ['items', 'talents']).then(function(data) {
    $scope.error = {};
    $scope.character = data;

  }, function(response) {
    $scope.error.response = response;
  });

  $scope.viewRaid = function() {
    $location.path("/");
  };

});