console.log('tamagotchi file is loaded');

//your class declaration here
class Tamogotchi {
    constructor(name, creatureType){
    this.name = name
    this.creatureType = creatureType
    this.foodInTummy = 10
    this.restedness = 10
    this.health = 10
    }
    cry (){
    this.foodInTummy - 1 
    console.log(this.name + ' says WAHH!!')
    }
}

//create new Tamagotchis
const henry = new Tamogotchi()
const bob = new Tamogotchi()

//test out your Tamagotchies below via console.logs
// console.log(henry);
// console.log(bob);

// Invoke each tamagotchi's cry method

// console.log(henry.cry());
// console.log(bob.cry());

// Part 2: Add Arguments

const hank = new Tamogotchi("Hank", "bunny");
console.log(hank.cry())