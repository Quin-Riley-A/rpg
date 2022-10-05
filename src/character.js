export default class Character {
  constructor(strength, intelligence, charisma, health) {
    this.strength = strength;
    this.intelligence = intelligence;
    this.charisma = charisma;
    this.health = health;
    this.role = "";
  }

  attack(character) {
    let hit = undefined;//Math.floor(Math.random() * 20 + 1);
    let damage = undefined;//Math.floor(Math.random() * 20 + 1);
    // if (hit > 0) {
    //   character.health -= damage;
    // }
    return [hit, damage]
  }
};


//skill bar
  //shows what each of your skill's values is at relative to the max val

// level
 //XP
  //character level which influences a character's abilities and skill values

//move
  //move allows character to move in one of four cardinal directions

//attack
  // attack allows character to inflict and receive damage from other NPCs and characters

//equip
  // equip character with item from inventory

//inventory
  // limited array of items [and other things?] carried and accesible to player 

//pickUp
  //lets you pick up an item and add it to inventory

//drop
  //removes an item from inventory

//interaction
  // talking/trading with other players & NPCs

//runAway
  // escape attacks 