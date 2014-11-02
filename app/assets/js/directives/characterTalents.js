angular.module('RaidBuilder.characterSpecs').directive('characterTalents',function(){
   return {
     restrict:'A',
     templateUrl:'./assets/templates/character-talents.html',
     scope:{
       specs:'=characterTalents'
     }
   };
});