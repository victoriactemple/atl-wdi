console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name, creatureType){
    this.name = name
    this.creatureType = creatureType
    this.foodInTummy = 10
    this.restedness = 10
    this.health = 10
    }
    cry (){
    this.foodInTummy --
    console.log(this.name + ' says WAHH!!')
    return this
    }
    puke(){
        this.foodInTummy --
        console.log(this.foodInTummy + "WAHHH WAHHH, I'm sick")
        return this
    }
    yawn(){
        this.restedness --
        console.log(this.name + "has a current restedness level of" + this.restedness)
        return this
    }
}
// //create new Tamagotchis
// const henry = new Tamagotchi()
// const bob = new Tamagotchi()

//test out your Tamagotchies below via console.logs
// console.log(henry);
// console.log(bob);

// Invoke each tamagotchi's cry method

// console.log(henry.cry());
// console.log(bob.cry());

// Part 2: Add Arguments

// const hank = new Tamagotchi("Hank", "bunny");
// console.log(hank.cry())

// Part 3: More Methods

const neelix = new Tamagotchi ("Neelix", "alien")
const buzzbee = new Tamagotchi("Buzzbee", "floater")

neelix.yawn().puke()
buzzbee.yawn().puke()


console.log(neelix)
console.log(buzzbee)