angular.module('RaidBuilder.raid').controller('RaidViewController',function($scope, raid){
  $scope.members = raid.members();

  $scope.clearRaid = function(){
    raid.reset();
  };

});