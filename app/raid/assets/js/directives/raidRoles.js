angular.module('RaidBuilder.raid').directive('raidRoles', function (raid) {
  return {
    restrict: 'A',
    scope: {
      characters: '=raidRoles',
      role:'@'
    },
    templateUrl: './raid/assets/templates/raid-roles.html',
    link:function(scope){

      scope.remove = function(character)
      {
        raid.remove(character);
      };

      scope.otherRole = function(character,role)
      {

      };
    }
  };
});