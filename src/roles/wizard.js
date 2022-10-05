export default class Wizard extends Character {
  constructor(character) {
    this.strength = character.strength;
    this.intelligence = character.intelligence + 1;
    this.charisma = character.charisma;
    this.health = character.health - 1;
    this.role = "Wizard";
  }
  //Wizard methods
}