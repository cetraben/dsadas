angular.module('RaidBuilder.item').factory('item', function($resource) {
  var ItemResource = $resource('https://us.api.battle.net/wow/item/:itemId',
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
   return function(itemId){
     return ItemResource.get({itemId : itemId}).$promise;
   };

});