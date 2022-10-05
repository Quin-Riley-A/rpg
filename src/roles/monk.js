export default class Monk extends Character {
  constructor(character) {  
    this.strength = character.strength;
    this.intelligence = character.intelligence;
    this.charisma = character.charisma - 1;
    this.health = character.health + 1;
    this.role = "Monk";
  }
    //Monk methods
    //flurry of blows
    //heal 'em up
    //
}