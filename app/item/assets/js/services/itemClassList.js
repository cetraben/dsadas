angular.module('RaidBuilder.item').factory('itemClassList',function($resource, API_KEY, itemClassTransformInterceptor){
  var ItemClassResource = $resource('https://us.api.battle.net/wow/data/item/classes',
      {apiKey : API_KEY},
      {
        get : {
          method : 'JSONP',
          params : {
            jsonp : 'JSON_CALLBACK'
          },
          cache : true,
          interceptor : itemClassTransformInterceptor
        }
      });
  return function() {
    return ItemClassResource.get().$promise;
  };
});