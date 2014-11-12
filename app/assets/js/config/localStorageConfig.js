angular.module('RaidBuilder.localStorage').run(function($localStorage){

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
