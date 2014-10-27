/**
 * Get Character service.  Pulls supplied character from supplied realm.
 */
angular.module('RaidBuilder.character').factory('character',function($resource){
  var CharacterResource = $resource('http://us.battle.net/api/wow/character/:realm/:character');

  return function(realm, character){
      return CharacterResource.get({realm:realm, character:character}).$promise;
  };
});
