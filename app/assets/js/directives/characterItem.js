angular.module('RaidBuilder.characterEquipment').directive('characterItem', function () {
  return {
    restrict: 'A',
    scope: {
      slot: '@',
      items: '=characterItem'
    },
    templateUrl: './assets/templates/character-item.html',
    link: function (scope) {
      scope.item = scope.items[scope.slot];
    }

  };
});