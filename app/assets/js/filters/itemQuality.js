angular.module('RaidBuilder.character').filter('itemQuality', function () {
  return function (input) {
    switch (input) {
      case 0:
        return 'junk';
      case 1:
        return 'normal';
      case 2:
        return 'magic';
      case 3:
        return 'rare';
      case 4:
        return 'epic';
      case 5:
        return 'legendary';
// TODO: Figure out the naming for these two qualities
      case 6:
        return 'goat';
      case 7:
        return 'boat';
    }
  }
});

