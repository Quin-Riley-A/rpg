import Dungeon from './../src/dungeon.js'

describe('Dungeon', () => {
  test('is the 8x8 dungeon grid generated', () => {
    let dungeon = new Dungeon(8,8);
    expect(dungeon.height).toEqual(8);
    expect(dungeon.width).toEqual(8);
  });
});
