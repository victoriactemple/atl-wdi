console.log('player file is loaded');

var player = {
  name: "Neo",
  feedTamagotchi: function(tamagotchi) {
    tamagotchi.foodInTummy++;
    console.log('YUM!!! ' + tamagotchi.name + ' has been fed and now has: ' + tamagotchi.foodInTummy + ' in the tummy');
  },
  medicateTamagotchi: function(tamagotchi) {
    tamagotchi.health++;
    console.log(tamagotchi.name + ' has been medicated and now has health: ' + tamagotchi.health);
  },
  knockOutTamagotchi: function(tamagotchi) {
    tamagotchi.restedness++;
    console.log(tamagotchi.name + ' got some Zzzzs! Restedness: ' + tamagotchi.restedness);
  }
}; //end player


//create new Tamagotchis
// const henry = new Tamagotchi()
// const bob = new Tamagotchi()

// const henry = new Tamagotchi()
// const bob = new Tamagotchi()

player.feedTamagotchi(neelix)
player.medicateTamagotchi(neelix)
player.knockOutTamagotchi(neelix)



player.feedTamagotchi(buzzbee)
player.medicateTamagotchi(buzzbee)
player.knockOutTamagotchi(buzzbee)


// player.feedTamogotchi(hank)
// // medicateTamagotchi()
// knockOutTamagochi()