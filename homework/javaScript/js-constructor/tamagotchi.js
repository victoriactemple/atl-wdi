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
    console.log(this.name + " says WAHH!! and has a food in tummy level of: " + this.foodInTummy)
    return this
    }
    puke(){
        this.foodInTummy --
        console.log(this.foodInTummy + " WAHHH WAHHH, I'm sick")
        return this
    }
    yawn(){
        this.restedness --
        console.log(this.name + " has a current restedness level of: " + this.restedness)
        return this
    }
    start () {
        console.log("start" + this.name)
        const me = this
        this.hungerTimer = setInterval(function() {
            me.cry();
        }, 6000)
       this.yawnTimer = setInterval(function() {
           me.yawn();
       }, 10000)    
       this.sickTimer = setInterval(function() {
           me.puke();
       }, 20000)
    }
    stop () {
        console.log("stop" + this.name);
    clearInterval(this.hungerTimer);
    clearInterval(this.yawnTimer);
    clearInterval(this.sickTimer);
    }
}
//create new Tamagotchis
const henry = new Tamagotchi()
const bob = new Tamagotchi()

//test out your Tamagotchies below via console.logs
// console.log(henry);
// console.log(bob);

// Invoke each tamagotchi's cry method

// console.log(henry.cry());
// console.log(bob.cry());

// console.log(henry.cry());
// console.log(bob.cry());


// Part 2: Add Arguments

const hank = new Tamagotchi("Hank", "bunny");
const felix = new Tamagotchi("Felix", "cat");

// console.log(hank.cry())
// console.log(felix.cry())

// // Part 3: More Methods

const neelix = new Tamagotchi ("Neelix", "alien")
const buzzbee = new Tamagotchi("Buzzbee", "floater")

// neelix.yawn().puke()
// buzzbee.yawn().puke()

// console.log(neelix.yawn().puke())
// console.log(buzzbee.yawn().puke())

// Part 5: Start and Stop

const frank = new Tamagotchi("Frank", "alien")
const noel = new Tamagotchi ("Noel", "Christmas-Ornament")

// console.log(frank.cry().puke().yawn())
// console.log(noel.cry().puke().yawn())


console.log(frank.puke())
console.log(noel.cry())


console.log(frank.start())
console.log(noel.start())

console.log(frank.stop())