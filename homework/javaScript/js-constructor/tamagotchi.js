console.log('tamagotchi file is loaded');

//your class declaration here
class Tamogotchi {
    constructor(){
    this.foodInTummy = 10
    this.restedness = 10
    this.health = 10
    }
    cry (){
        this.foodInTummy - 1 
        console.log("WAHH!!")
    }
}

//create new Tamagotchis
const henry = new Tamogotchi()
const bob = new Tamogotchi()

//test out your Tamagotchies below via console.logs
console.log(henry);
console.log(bob);
