angular.module('RaidBuilder.raid').directive('raidRoles', function (raid) {
  return {
    restrict: 'A',
    scope: {
      characters: '=raidRoles'
    },
    templateUrl: './raid/assets/templates/raid-roles.html',
    link:function(scope){

      scope.remove = function(character)
      {
        raid.remove(character);
      };
    }
  };
});