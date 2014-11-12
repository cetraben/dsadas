describe('roles factory spec', function () {
  var roles;

  beforeEach(module('RaidBuilder.raid'));

  beforeEach(inject(function (_roles_) {
    roles = _roles_;
  }));

  it('correct roles extracted', function () {
    var character = { 'talents': []};
    character.talents.push({'spec': {'role': 'HEALING'}});
    character.talents.push({'spec': {'role': 'DPS'}});

    var characterRoles = roles(character);
    expect(characterRoles).toEqual(['HEALING', 'DPS'])
  });

  it('duplicate roles ignored', function () {
    var character = { 'talents': []};
    character.talents.push({'spec': {'role': 'HEALING'}});
    character.talents.push({'spec': {'role': 'HEALING'}});

    var characterRoles = roles(character);
    expect(characterRoles).toEqual(['HEALING'])
  });

  it('empty secondary ignored', function () {
    var character = { 'talents': []};
    character.talents.push({'spec': {'role': 'HEALING'}});
    character.talents.push({'spec': null});

    var characterRoles = roles(character);
    expect(characterRoles).toEqual(['HEALING'])
  });

  it('empty primary ignored', function () {
    var character = { 'talents': []};
    character.talents.push({'spec': null});
    character.talents.push({'spec': {'role': 'HEALING'}});

    var characterRoles = roles(character);
    expect(characterRoles).toEqual(['HEALING'])
  });
});