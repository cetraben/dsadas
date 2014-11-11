angular.module('RaidBuilder.character').factory('characterStorageInterceptor',function($localStorage){

  return {
    response:function (response) {
      var character = response.data;
      $localStorage.characters[[character.realm, character.name].join(';')] = character;
      $localStorage.names.push({
        realm: character.realm,
        name: character.name,
        locator: [character.realm, character.name].join(';')
      });
      return character;
    }
  };
});