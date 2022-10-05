import Character from './../character.js'
export default class Barbarian extends Character {
  constructor(strength, intelligence, charisma, health) {
    super(strength, intelligence, charisma, health);
    this.strength += 1;
    this.intelligence +=  -1;
    this.role = "Barbarian";
  }
  //Barbarian methods
}