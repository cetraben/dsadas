angular.module('RaidBuilder',['ngRoute',
  'RaidBuilder.character',
  'RaidBuilder.characterSearch',
  'RaidBuilder.characterEquipment']);

angular.module('RaidBuilder.character', ['ngResource']);
angular.module('RaidBuilder.characterSearch',['RaidBuilder.character', 'ngRoute']);
angular.module('RaidBuilder.characterEquipment', []);