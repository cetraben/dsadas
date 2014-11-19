angular.module('RaidBuilder.raid').directive('raidRoles', function (raid, roles) {
  return {
    restrict: 'A',
    scope: {
      characters: '=raidRoles',
      role: '@'
    },
    templateUrl: './raid/assets/templates/raid-roles.html',
    link: function (scope) {

      scope.remove = function (character) {
        raid.remove(character);
      };

      scope.otherRole = function (character) {
        var characterRoles = roles(character, scope.role);

        if (characterRoles.length > 1) {
          var role = 1 - characterRoles.indexOf(scope.role);

          return characterRoles[role];
        }
      };

      scope.changeRole = function (character) {
        raid.remove(character);
        var otherRole = scope.otherRole(character);
        raid.add(character,otherRole);
      };
    }
  };
});