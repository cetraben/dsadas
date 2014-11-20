angular.module('RaidBuilder.item').filter('itemBind', function() {

  //TODO: Need to construct the list of binding types (no bind, bop, boe, boa)
  return function(stat) {
    switch (stat) {
      case 1:
        return 'Bind on Pickup';
      case 2:
        return 'Bind on Equip';
    }

    return 'itemBind:' + stat;

  };
});