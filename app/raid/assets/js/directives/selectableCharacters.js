angular.module('RaidBuilder.raid.selectableCharacters').directive('selectableCharacters',function(){
  return {
    restrict: 'A',
    scope:{},
    replace: true,
    templateUrl: './raid/assets/templates/selectable-characters.html',
    controller: function ($scope, $localStorage,raid) {
      $scope.characters = $localStorage.characters;
      $scope.add = function(character) {
        raid.add(character);
      };

    }
  }
});