import Barbarian from './../src/roles/barbarian.js'

describe('Barbarian', () => {
  test('should build a Barbarian-class character with modified property values', () => {
    let barbarian = new Barbarian(100, 20, 50, 50);
    expect(barbarian.strength).toEqual(101);
    expect(barbarian.intelligence).toEqual(19);
    expect(barbarian.charisma).toEqual(50);
    expect(barbarian.health).toEqual(50);
    expect(barbarian.role).toEqual("Barbarian");
  });

});
    