angular.module('RaidBuilder.characterSpecs').directive('characterTalentSpec', function(){
   return {
     restrict: 'A',
     templateUrl: './assets/templates/character-talent-spec.html',
     scope:{
       talents:'=characterTalentSpec'
     }
   }
});