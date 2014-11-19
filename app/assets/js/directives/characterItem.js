angular.module('RaidBuilder.characterEquipment').directive('characterItem', function () {
  return {
    restrict: 'A',
    scope: {
      slot: '@',
      items: '=characterItem'
    },
    templateUrl: './assets/templates/character-item.html',
    link: function (scope) {
      scope.toolTip = {show:false};
      scope.item = scope.items[scope.slot];
      scope.toggleToolTip = function()
      {
        scope.toolTip.show=!scope.toolTip.show;
      };
    }

  };
});