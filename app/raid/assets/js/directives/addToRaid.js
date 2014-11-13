/**
 * Add to raid link.  If character is already in raid, displays (In Raid) tag.
 */
angular.module('RaidBuilder.raid').directive('addToRaid',function(raid){
  return {
    restrict:'A',
    templateUrl:'./raid/assets/templates/add-to-raid.html',
    scope:{
      character:'=addToRaid',
      callback:'='
    },
    link:function(scope){
      scope.addToRaid = function(character) {
        raid.add(character);
        if(angular.isFunction(scope.callback)) {
          scope.callback();
        }
      };

      scope.notInTeam = function(character) {
        return raid.notInTeam(character);
      };
    }
  };
});