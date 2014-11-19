angular.module('RaidBuilder.item').directive('itemToolTip',function(item){
  return {
    restrict:'A',
    scope:{
      itemToolTip:'='
    },
    templateUrl : './item/assets/templates/item-tool-tip.html',
    link:function(scope){
      item(scope.itemToolTip.id,scope.itemToolTip.context).then(function(data){
        scope.item = data;
      });
    }

  };
});