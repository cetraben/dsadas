angular.module('RaidBuilder.characterSearch').directive('characterSearch',function($location,character){
    return {
      restrict:'A',
      scope:{},
      templateUrl:'./assets/templates/character-search.html',
      link: function(scope)
      {
        scope.search = {};
        scope.error = {};

        scope.doSearch = function () {
          scope.error = {};

          if (scope.searchForm.$valid) {
            character(scope.search.realm, scope.search.character).then(function () {
              $location.path('/character/US/' + scope.search.realm + '/' + scope.search.character);
            }, function (response) {
              scope.character = null;
              scope.error.response = response;
            });
          }
        };
      }
    };
});