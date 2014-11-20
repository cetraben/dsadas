/**
 * Get Character service.  Pulls supplied character from supplied realm.
 */
angular.module('RaidBuilder.character').factory('character', function ($resource, API_KEY, characterStorageInterceptor) {

  var CharacterResource = $resource('https://us.api.battle.net/wow/character/:realm/:character',
    {apiKey: API_KEY},
    {
      get: {
        method: 'JSONP',
        params: {
          jsonp: 'JSON_CALLBACK'
        },
        interceptor: characterStorageInterceptor
      }
    });

  return function (realm, character, fields) {
    var requestParams = {realm: realm, character: character};
    if(fields){
      requestParams.fields = fields.join(',');
    }
    return CharacterResource.get(requestParams).$promise;
  };
});
