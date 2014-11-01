angular.module('RaidBuilder.characterEquipment').directive('characterEquipment',function(){
  return {
    restrict:'A',
    templateUrl:'./assets/templates/character-equipment.html',
    scope:{
      items: '='
    }

  }
});