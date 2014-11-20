angular.module('RaidBuilder.item').directive('itemToolTip',function(item,itemClassList){
  return {
    restrict:'A',
    scope:{
      itemToolTip:'='
    },
    templateUrl : './item/assets/templates/item-tool-tip.html',
    link:function(scope){

      var getItem = function()
      {
        return item(scope.itemToolTip.id, scope.itemToolTip.context).then(function(data) {
          scope.item = data;
          return data;
        });
      };

      var getItemClass = function(theItem){
        return itemClassList().then(function(itemClasses){
          var className = itemClasses[theItem.itemClass].name;
          var subclass = itemClasses[theItem.itemClass].subClasses[theItem.subClass];
          scope.itemClass = {className: className, subclass: subclass};
        });
      };

      // TODO: implementation changes: item -> itemClass -> loading done.
      getItem().then(getItemClass);

    }
  };
});