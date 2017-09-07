//*************************
// Problem 1:
// Barrels O' RUM
//Write a barrel function that calculates and returns the price of a large barrel of rum as an integer. barrel takes in 3 arguments: the number of small barrels, the number of large barrels, and the total price. Unit of currency is negligible.




//     - The remainder amount is the total cost of large barrels
//     - Divide total cost of large barrels by number of barrels

const barrels = (small, large, total) => {
// //- Find the cost of a small barrel:
// - We know 1 small barrel costs 60 right off the bat
const smallBarrel = 60; 
// - Find the cost of the large barrel:
//   - First find the cost of all large barrels
//     - To do that, grab the total cost (825)
const largeBarrel = (total - (small * smallBarrel) / large);
return largeBarrel;
//     - Subtract the small barrels from the total
//       - calculate the small barrels total price (2 * 60 = 120)
// LargeBarre = ((825 - (2 * 60)) / 3)


};
barrels(2,5,825) // 141



//*************************
// Problem 2:
// Sailing the Seas

// - Calculate the cost:
// - total gallons used * cost of fuel

const shipFuelCost = function(fuelPrice, milesPerGallon){
  // //- Find the distance of the earth circumference in miles
  const circumference = 24901; 
  const mpg = milesPerGallon;

  //- Calculate the # of gallons used to travel around the earth
  // - circumference / MPG (miles per gallon)
  const numberofGallonsUsed = circumference / mpg 
const totalCost  = numberofGallonsUsed *  fuelPrice; 
 
return totalCost;

};

shipFuelCost(3, 12) // 6225.25

//*************************
// Problem 3:
// GROG
// - Find the total amount of pure fruit juice (gal)
// - Total of Costco pure fruit juice:
//   - percentage pure fruit juice * number of gallons
// - Total of Kirkland pure fruit juice:
//   - percentage pure fruit juice * number of gallons
const totalCostCoFruitJuice = costCoGallons * (costcoPurity/100)

// - Add Costco pure fruit juice total + Kirkland pure fruit juice total
// - Find the total amount of juice (gal):
// - Total of Costco juice + Total of Kirkland Juice
// - Calculate (total pure fruit juice) / (total juice)


var calcFruitJuice = function(costCoGallons, costCoPurity, kirklandsGallons, kirklandsPurity){

// - Find the total amount of pure fruit juice (gal)
// - Total of Costco pure fruit juice:
//   - percentage pure fruit juice * number of gallons
const totalCostCoFruitJuice = costCoGallons * (costcoPurity/100);


// - Total of Kirkland pure fruit juice:
//   - percentage pure fruit juice * number of gallons
const totalKirklandFruitJuice = kirklandsGallons * (kirklandsPurity/100);


// - Add Costco pure fruit juice total + Kirkland pure fruit juice total
const totalCombinedFruitJuice = totalCostCoFruitJuice + totalKirklandsFruitJuice;
// - Find the total amount of juice (gal):
// - Total of Costco juice + Total of Kirkland Juice
const totalJuice - costGoGallons + kirklandsGallons;
// - Calculate (total pure fruit juice) / (total juice)
return totalombineFruitJuice/totalJuice; 

};

calcFruitJuice(3, 20, 2, 55) // 0.34

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
