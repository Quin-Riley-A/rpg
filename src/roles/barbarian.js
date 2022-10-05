export default class Barbarian extends Character {
  constructor(character) {
    this.strength = character.strength + 1;
    this.intelligence = character.intelligence - 1;
    this.charisma = character.charisma;
    this.health = character.health;
    this.role = "Barbarian";
  }
  //Barbarian methods
}