angular.module('RaidBuilder.item').filter('stat', function() {

  //TODO: Need to construct the list of stats, or figure out how stats are designated.
  return function(stat) {
     switch(stat){
       case 73:
         return 'Agility or Intellect';
     }

    return 'stat:'+stat;

  };
});