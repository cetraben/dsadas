angular.module('RaidBuilder',['ngRoute',
  'RaidBuilder.character',
  'RaidBuilder.characterSearch',
  'RaidBuilder.characterEquipment',
  'RaidBuilder.characterSpecs',
  'RaidBuilder.recentCharacters',
  'RaidBuilder.raid'
]);

angular.module('RaidBuilder.character', ['ngResource','ngStorage', 'RaidBuilder.localStorage']);
angular.module('RaidBuilder.recentCharacters', ['ngStorage','RaidBuilder.character']);
angular.module('RaidBuilder.characterSearch',['RaidBuilder.character', 'ngRoute']);
angular.module('RaidBuilder.characterEquipment', []);
angular.module('RaidBuilder.characterSpecs', []);
angular.module('RaidBuilder.localStorage', ['ngResource']);