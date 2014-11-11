angular.module('RaidBuilder.character').filter('characterClass', function () {
  return function(input, toCss) {

    var characterClass="";
    switch (input) {
      case 1:
        characterClass = 'Warrior';
        break;
      case 2:
        characterClass = 'Paladin';
        break;
      case 3:
        characterClass = 'Hunter';
        break;
      case 4:
        characterClass = 'Rogue';
        break;
      case 5:
        characterClass = 'Priest';
        break;
      case 6:
        characterClass = 'Death Knight';
        break;
      case 7:
        characterClass = 'Shaman';
        break;
      case 8:
        characterClass = 'Mage';
        break;
      case 9:
        characterClass = 'Warlock';
        break;
      case 11:
        characterClass = 'Druid';
        break;
    }

    if(characterClass && toCss)
    {
      characterClass = characterClass.toLowerCase().replace(/ /g, '-');
    }
    return characterClass;
  };
});

