angular.module('RaidBuilder.item').factory('itemClassList',function($resource, itemClassTransformInterceptor){
  var ItemClassResource = $resource('https://us.api.battle.net/wow/data/item/classes',
      {apiKey : ''},
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