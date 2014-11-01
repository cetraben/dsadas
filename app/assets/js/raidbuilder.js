angular.module('RaidBuilder',['ngRoute',
  'RaidBuilder.character',
  'RaidBuilder.characterSearch']);
angular.module('RaidBuilder.character',['ngResource']);
angular.module('RaidBuilder.characterSearch',['RaidBuilder.character', 'ngRoute']);