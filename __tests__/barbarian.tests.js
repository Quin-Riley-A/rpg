import Character from './../src/character.js'
import Barbarian from './../src/roles/barbarian.js'

describe('Barbarian', () => {
  test('should build a Barbarian-class character with modified property values', () => {
    let character = new Character(100, 20, 50, 50);
    let barbarian = new Barbarian(character);
    expect(barbarian.strength).toEqual(101);
    expect(barbarian.intelligence).toEqual(19);
    expect(barbarian.charisma).toEqual(50);
    expect(barbarian.health).toEqual(50);
    expect(barbarian.role).toEqual("Barbarian");
  });

});
    