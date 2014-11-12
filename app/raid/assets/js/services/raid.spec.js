describe('raid service spec',function(){
  var raid;
  var $localStorage;
  beforeEach(module('RaidBuilder.raid'));

  beforeEach(inject(function (_$localStorage_) {
    $localStorage = _$localStorage_;
  }));

  beforeEach(inject(function (_raid_) {
    raid = _raid_;
  }));

  afterEach(inject(function ($localStorage) {
    $localStorage.$reset();
  }));

  describe('add() function', function () {

    it('character added to heals', function () {
      var character = {talents: []};
      character.talents.push({selected: true, 'spec': {'role': 'HEALING'}});
      character.talents.push({'spec': {'role': 'DPS'}});

      raid.add(character);

      var raidMembers = $localStorage.raidMembers;
      expect(raidMembers.heals[0]).toEqual(character);
    });

    it('add character to specified role', function () {
      var character = {talents: []};
      character.talents.push({selected: true, 'spec': {'role': 'HEALING'}});
      character.talents.push({'spec': {'role': 'DPS'}});

      raid.add(character,'DPS');

      var raidMembers = $localStorage.raidMembers;
      expect(raidMembers.dps[0]).toEqual(character);
    });

    it('character added to dps', function () {
      var character = {talents: []};
      character.talents.push({ 'spec': {'role': 'HEALING'}});
      character.talents.push({selected: true,'spec': {'role': 'DPS'}});

      raid.add(character);

      var raidMembers = $localStorage.raidMembers;
      expect(raidMembers.dps[0]).toEqual(character);
    });

    it('character added to dps', function () {
      var character = {talents: []};
      character.talents.push({ 'spec': {'role': 'HEALING'}});
      character.talents.push({selected: true, 'spec': {'role': 'TANK'}});

      raid.add(character);

      var raidMembers = $localStorage.raidMembers;
      expect(raidMembers.tanks[0]).toEqual(character);
    });
  });
});