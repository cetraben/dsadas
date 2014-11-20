angular.module('RaidBuilder.item').factory('itemClassTransformInterceptor', function() {

  return {
    response : function(response) {
      var data = response.data;

      var itemClasses = {};

      angular.forEach(data.classes,function(itemClass){
        var newClass = {name:'',subClasses:{}};
        newClass.name = itemClass.name;
        var id = itemClass.class;

        angular.forEach(itemClass.subclasses,function(subClass){
          newClass.subClasses[subClass.subclass] = subClass.name;
        });

        itemClasses[id]=newClass;
      });

      return itemClasses;
    }
  };
});