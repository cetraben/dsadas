describe("character service", function() {
  var $httpBackend,character;
  beforeEach(module('RaidBuilder.character'));

  beforeEach(inject(function(_$httpBackend_, _$rootScope_, _character_) {
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    character = _character_;
  }));

  it('successful get', function() {
    $httpBackend.expectJSONP('http://us.battle.net/api/wow/character/Kilrogg/Mactar?jsonp=JSON_CALLBACK').respond({name: 'Mactar'});

    character('Kilrogg','Mactar');

    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('fields selected with correct format', function () {
    $httpBackend.expectJSONP('http://us.battle.net/api/wow/character/Kilrogg/Mactar?fields=items,audit&jsonp=JSON_CALLBACK').respond({name: 'Mactar'});

    character('Kilrogg', 'Mactar',['items','audit']);

    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('successful calls success function', function() {
    $httpBackend.expectJSONP('http://us.battle.net/api/wow/character/Kilrogg/Mactar?jsonp=JSON_CALLBACK')
        .respond({name:'Mactar'});

    var callback = jasmine.createSpy();

    character('Kilrogg', 'Mactar').then(callback);

    $httpBackend.flush();
    expect(callback).toHaveBeenCalled();
  });

  it('successful calls success function', function() {
    $httpBackend.expectJSONP('http://us.battle.net/api/wow/character/Kilrogg/Mactar?jsonp=JSON_CALLBACK').respond(404);

    var callback = jasmine.createSpy();

    character('Kilrogg', 'Mactar').catch(callback);
    $httpBackend.flush();
    expect(callback).toHaveBeenCalled();
  });

});