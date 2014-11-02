describe('CharacterViewController spec', function () {
  var $controller, $scope, characterMock,deferred;
  beforeEach(module('RaidBuilder'));

  beforeEach(inject(function (_$controller_, _$rootScope_, $q) {
    $scope = _$rootScope_.$new();
    $controller = _$controller_;
    deferred = $q.defer();
    characterMock = jasmine.createSpy('characterMock').and.returnValue(deferred.promise);

    $controller('CharacterViewController',{
        $scope:$scope,
        character: characterMock,
        realm: 'Kilrogg',
        name: 'Torhol'
      }
    );

  }));

  it('character selected on load', function () {
    expect(characterMock).toHaveBeenCalledWith('Kilrogg','Torhol',['items',
    'talents']);
  });

});