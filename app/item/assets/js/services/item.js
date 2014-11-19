angular.module('RaidBuilder.item').factory('item', function($resource) {
  var ItemResource = $resource('https://us.api.battle.net/wow/item/:itemId/:context',
      {apiKey : ''},
      {
        get : {
          method : 'JSONP',
          params : {
            jsonp : 'JSON_CALLBACK'
          },
          cache : true
        }
      });
   return function(itemId,context){
     return ItemResource.get({itemId : itemId,context:context}).$promise;
   };

});