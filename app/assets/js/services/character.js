/**
 * Get Character service.  Pulls supplied character from supplied realm.
 */
angular.module('RaidBuilder.character').factory('character', function ($resource) {
  var CharacterResource = $resource('http://us.battle.net/api/wow/character/:realm/:character',
    {},
    {
      get: {
        method: 'JSONP',
        params: {
          jsonp: 'JSON_CALLBACK'
        }
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
