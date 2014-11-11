angular.module('RaidBuilder').run(function($localStorage){

  $localStorage.$default({
    names: [],
    characters: {},
    raidMembers: {
      tanks:[],
      heals:[],
      dps:[]
    }
  });
});
