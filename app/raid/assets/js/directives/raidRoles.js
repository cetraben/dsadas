angular.module('RaidBuilder.raid').directive('raidRoles', function () {
  return {
    restrict: 'A',
    scope: {
      characters: '=raidRoles'
    },
    templateUrl: './raid/assets/templates/raid-roles.html'
  }
});