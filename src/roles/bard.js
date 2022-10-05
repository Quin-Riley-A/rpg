export default class Bard extends Character {
  constructor(character) {
    this.strength = character.strength - 1;
    this.intelligence = character.intelligence;
    this.charisma = character.charisma + 1;
    this.health = character.health;
    this.role = "Bard";
  }
  //bard methods
}