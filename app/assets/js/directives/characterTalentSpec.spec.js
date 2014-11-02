describe('characterTalentSpec directive spec',function(){
  var $scope, $compile, element, isolateScope;
  beforeEach(module('RaidBuilder.characterSpecs'));
  beforeEach(module('./assets/templates/character-talent-spec.html'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $scope = _$rootScope_.$new();

    $scope.talents = {
      spec:{
        name:'Guardian',
        icon:'icon_name',
        role:'TANK'
      }
    };

    element = $compile('<div character-talent-spec="talents"></div>')($scope);
    $scope.$apply();
    isolateScope = element.isolateScope();

  }));

  describe('rendering', function () {
    it('displays spec role', function () {
      expect(element.find('div.role').text()).toEqual('TANK');
    });

    it('displays spec name', function () {
      expect(element.find('div.name').text()).toEqual('Guardian');
    });

    it('displays spec has icon image', function () {
      expect(element.find('div.icon img').attr('src')).toEqual('http://media.blizzard.com/wow/icons/36/icon_name.jpg');
    });

    it('displays selected span', function () {
      $scope.talents.selected = true;
      $scope.$apply();
      expect(element.find('span.selected').length).toEqual(1);
    });

    it('does not display selected span', function () {
      $scope.talents.selected = false;
      $scope.$apply();
      expect(element.find('span.selected').length).toEqual(0);
    });
  });
});