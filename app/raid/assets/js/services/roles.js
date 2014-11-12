angular.module('RaidBuilder.raid').factory('roles', function() {
  return function(character) {
    var characterTalents = character.talents;

    var roles = [];
    angular.forEach(characterTalents,function(talents){
      if(talents.spec)
      {
        if(roles.length === 0 || roles[0] !== talents.spec.role)
        {
          roles.push(talents.spec.role);
        }
      }
    });

    return roles;
  };
});