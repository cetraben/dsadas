angular.module('RaidBuilder.raid', [
  'ngStorage',
  'RaidBuilder.raid.selectableCharacters'
]);
angular.module('RaidBuilder.raid.selectableCharacters', ['ngStorage', 'RaidBuilder.character']);
