describe('RaidBuilder routes spec',function(){
  beforeEach(module('RaidBuilder'));
  describe("/ route", function () {
    beforeEach(module('./assets/views/character-search.html'));

    it('should load the template, controller and call the resolve', inject(function ($location, $rootScope, $route) {

      $rootScope.$apply(function () {
        $location.path('/');
      });

      expect($route.current.controller).toBe('CharacterSearchController');
      expect($route.current.loadedTemplateUrl).toBe('./assets/views/character-search.html');

    }));
  });

  describe('/characters route', function () {
    beforeEach(module('./assets/views/character-view.html'));

    it('should load the template, controller and call the resolve', inject(function ($location, $rootScope, $route) {

      $rootScope.$apply(function () {
        $location.path('/character/US/Kilrogg/Torhol');
      });

      expect($route.current.controller).toBe('CharacterViewController');
      expect($route.current.loadedTemplateUrl).toBe('./assets/views/character-view.html');

    }));
  });
});