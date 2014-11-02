describe('characterSpecs directive spec',function(){
  var $scope, $compile, element, isolateScope;
  beforeEach(module('RaidBuilder.characterSpecs'));
  beforeEach(module('./assets/templates/character-talents.html'));
  beforeEach(module('./assets/templates/character-talent-spec.html'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $scope = _$rootScope_.$new();

  }));

  var compileElement = function()
  {
    element = $compile('<div character-talents="talents"></div>')($scope);
    $scope.$apply();
    isolateScope = element.isolateScope();
  };

  describe('rendering', function () {
    it('two talents divs within', function () {
      $scope.talents = [{},{}];

      compileElement();
      debugger;
      expect(element.find('div.talents').length).toBe(2);
    });
  });
});