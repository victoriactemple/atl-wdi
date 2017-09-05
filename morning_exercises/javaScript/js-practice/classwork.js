// General Assembly, WDI (Web Development Immersive) Remote, Cohort 04 (Matey)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

/// Basic Data Types and Expressions ///
// For each expression below, indicate whether it is 'truthy' or 'falsey'
// by assigning the appropriate variable a value of either `true` or `false`.

// 1. true || false 
var resOne = true;
truthy 

// 2. null || ''
var resTwo = null;
false

// 3. 'false' && true
var resThree = true;
truthy

// 4. !!0
var resFour = true;
// not equal to zero

// 5. !null && !undefined
var resFive = true;
// ! $a Not TRUE if $a is not true...?


/// Flow Control ///

// 6. Write a `while` loop that increases `resSix` by 23 until `resSix` is five
//    digits long. (Hint: take a look at the .toString() method)
var resSix;
const i = 0;
while (i <= 23) {
  alert (i);
  i++;
}
`resSix`.toString();

// 7. Write a `while` loop that increases `resSeven` by 12 when it's strictly
//    below 95, decreases it by 7 when it's strictly above 105, and stops as
//    soon as `resSeven` equals or falls between those two values.
var resSeven;
const i = 0;
while (i < 95) {
  alert(i);
  i + 12;
  && //I don't know if this is allowed
  while (i > 105);
  i - 7;
  while  (i <= 94 && <=99);
  alert(i);
}


// 8. Write a `for` loop that counts from 0 (inclusive) to 1857 (exclusive) and
//    calculates the sum of all of those numbers, storing the result in the
//    variable `resEight`.
var resEight;
for (const i = 0; i <= 1858; i++) {
const `resEight` = `resEight` + i;
}
  

// 9. Using a `for` loop, calculate the sum of all multiples of 7 between 0
//    (inclusive) and 1000 (exclusive); store the result in the variable
//    `resNine`.
var resNine;
  for (const i = 0; i  <= 1000; i++) {
    if (i % 7); 
      alert (const `resNine` = i);
  }

// 0 to 1000 % 7

// 10. For numbers 1-10, calculate n^n and then store the sum of all of these values in the variable `resTen`.
var resTen;



/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  one: resOne,
  two: resTwo,
  three: resThree,
  four: resFour,
  five: resFive,
  six: resSix,
  seven: resSeven,
  eight: resEight,
  nine: resNine,
  ten: resTen
}
