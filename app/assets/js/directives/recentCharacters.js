angular.module('RaidBuilder.recentCharacters').directive('recentCharacters', function () {
  return {
    restrict: 'A',
    replace:true,
    scope:{},
    templateUrl:'./assets/templates/recent-characters.html',
    controller: function ($scope, $localStorage){
      $scope.characters = $localStorage.characters;
    }
  }
});