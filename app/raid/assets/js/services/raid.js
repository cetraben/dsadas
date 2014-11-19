angular.module('RaidBuilder.raid').service('raid', function ($localStorage) {
  var members = $localStorage.raidMembers;
  var self = this;

  this.notInTeam = function (newCharacter) {
    var notInTeam = true;
    var characters = angular.copy(members.tanks);
    characters = characters.concat(members.heals).concat(members.dps);
    angular.forEach(characters, function (character) {
      if (character.realm == newCharacter.realm && character.name == newCharacter.name) {
        notInTeam = false;
      }
    });
    return notInTeam;
  };

  this.members = function () {
    return members;
  };

  this.reset = function () {
    members.tanks = [];
    members.heals = [];
    members.dps = [];
  };

  this.add = function (character, role) {
    if (self.notInTeam(character)) {

      if (!role) {
        angular.forEach(character.talents, function (talents) {
          if (talents.spec && talents.selected) {
            role = talents.spec.role;
          }
        });
      }
      switch (role) {
        case 'TANK':
          members.tanks.push(character);
          break;
        case 'HEALING':
          members.heals.push(character);
          break;
        case 'DPS':
          members.dps.push(character);
          break;
      }
    }
  };

  var removeIfFound = function (array, character) {
    var length = array.length;
    for (var i = 0; i < length; i++) {
      var member = array[i];

      if (member.realm == character.realm && member.name == character.name) {
        array.splice(i, 1);
        break;
      }
    }
  };

  this.remove = function (character) {
    removeIfFound(members.tanks, character);
    removeIfFound(members.heals, character);
    removeIfFound(members.dps, character);
  };
});