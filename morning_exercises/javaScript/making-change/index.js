// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///


//Write a function called makeChange, which will take two arguments, a purchase price and an amount of money tendered; it will return an array of the quantities of quarters, dimes, nickels and pennies that it must give back in order to make proper change (without giving too many smaller coins).

// Here's an example of how this should work. Say we want to buy something for $5.60, and we pay $6.00; we should get back 1 quarter, 1 dime, and 1 nickel. If the item was, instead, $5.62, we would get back 1 quarter, 1 dime, and 3 pennies.

//HINT: It would make things much easier if we were to work in terms of cents rather than in terms of fractional dollars. We can do this by multiplying by 100. Use Math.round to deal with any rounding issues.

// const changeLeft = Math.round((100 * price) - (100 * payment));
// //If the price is $8 and the payent is $10, no coins will be givn
// const noSmallChangeArray = [0, 0, 0 ,0];
// const changeGiven = [];
//   if (payment - price = 0){
//     return noSmallChangeArray;
//   }

// //If the price is $5.62 and the payment is $6, the change is 38¢ being 1 Quarter, 1 Dime, and 3 Pennies. Order and array that needs to be present so the function knows where to put the change.
// [25, 10, 5, 1]


var makeChange = function(price, payment) {
  price *= 100;
  payment *= 100;
  //Given price and payment amount. 
  //Calculate the change
  let change = payment - price;
  //If the price is more than the payment, return [0, 0, 0, 0]
  if (change <= 0){
    return [0, 0, 0, 0]
  } else {
    const givenChange = [];
    [25, 10, 5, 1].forEach((coin))
    // change *= 100;
      //Return an array like [Quarters, Dimes, Nickles, Pennies]
    //Calculate Quarters
  //  const quarters= Math.floor(change / 25);  
  //  change = change % 25 
  //   //Calculate Dimes
  //   const dimes = Math.floor(change / 10);
  //   change = change % 10
  //   //Calculate Nickels
  //   const nickles = Math.floor(change / 5);
  //   change = change % 5
  //   //Calculate Pennies
  //   const pennies = change;
  
  //   return [quarters, dimes, nickels, pennies],

  }

 
return quarters;

};

//makeChange(5.60, 6.00) // => [1, 1, 1, 0]
// makeChange(5.62, 6.00) // => [1, 1, 0, 3]
// //                            Q, D, N, P

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
