ddescribe('itemClassList service',function(){
  var itemClassList, $httpBackend;
  beforeEach(module('RaidBuilder.item'));

  beforeEach(inject(function(_$httpBackend_,_itemClassList_) {
    $httpBackend = _$httpBackend_;
    itemClassList = _itemClassList_;
  }));

  it('successful get', function() {

    $httpBackend.expectJSONP('https://us.api.battle.net/wow/data/item/classes?apiKey=&jsonp=JSON_CALLBACK').respond({});

    itemClassList();

    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('successful calls success function', function() {
    var response = {
      "classes" : [
        {
          "class" : 17,
          "name" : "Battle Pets",
          "subclasses" : [
            {
              "subclass" : 0,
              "name" : "BattlePet"
            }
          ]
        }
      ]
    };

    $httpBackend.expectJSONP('https://us.api.battle.net/wow/data/item/classes?apiKey=&jsonp=JSON_CALLBACK').respond(response);

    var callback = jasmine.createSpy();

    itemClassList().then(callback);

    $httpBackend.flush();
    expect(callback).toHaveBeenCalledWith({ 17 : { subClasses : { 0 : 'BattlePet' }, name : 'Battle Pets' } });
  });

});