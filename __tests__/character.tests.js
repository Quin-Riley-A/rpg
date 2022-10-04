import Character from './../src/character.js'

describe('Character', () => {
  test('should build a character object containing the set values', () => {
    let character = new Character(100, 20, 50, 50);
    expect(character.strength).toEqual(100);
    expect(character.intelligence).toEqual(20);
    expect(character.charisma).toEqual(50);
    expect(character.health).toEqual(50);
  });
});