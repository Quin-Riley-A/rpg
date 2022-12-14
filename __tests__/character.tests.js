import Character from './../src/character.js'

describe('Character', () => {
  test('should build a character object containing the set values', () => {
    let character = new Character(100, 20, 50, 50);
    expect(character.strength).toEqual(100);
    expect(character.intelligence).toEqual(20);
    expect(character.charisma).toEqual(50);
    expect(character.health).toEqual(50);
  });

  test('should determine if hit is passed using math randomizer', () => {
    let character = new Character(100, 20, 50, 50);
    const hitArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    const resultArr = character.attack(character);
    expect(resultArr[0]).toBeGreaterThan(0);
    expect(hitArr.includes(resultArr[0])).toEqual(true);
  //  expect(character.health).toEqual(50-resultArr[1]);
  });

  test('should take away damage from health', () => {
    let character = new Character(100, 20, 50, 50);
    const resultArr = character.attack(character);
    expect(character.health).toEqual(50-resultArr[1]);
  });
});