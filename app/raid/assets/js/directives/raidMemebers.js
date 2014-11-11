angular.module('RaidBuilder.raid').directive('raidMembers', function () {
  return {
    restrict: 'A',
    replace: true,
    scope:{
      raidMembers:'='
    },
    templateUrl: './raid/assets/templates/raid-members.html',
    controller:function($scope){

    }
  }
});