//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// const lengths = (stringArray) => {
//     const words = ["apple", "pear", "kiwi"];
//     return words.length;  
//     // stringArray = [string1, string1, string3];
//     // const lengthArray = [];
//     // for( let i = 0; i < stringArray.length; i++);
// }

const words = ["hello", "what", "is", "up", "dude"]
function lengths(words){
const lengthAtIndex = [];
for (let i = 0; i < words.length; i++) {
    lengthAtIndex.push(words[i]).length)
}
return lengthAtIndex;
}

console.log(lengths(words));


// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

function trasmogrifier(a,b,c){
    return (a * b) ** c;
}
transmorifier (2, 3, 4);


// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.


const wordReverse = (sentence) => {
    const split = sentence.split(" ");
    const reversed = split.reverse();
    // console.log(reversed);
    return reversed.join(" "); 
}

wordReverse("Put Hans back on the line")
wordReverse("Now I know what a TV dinner feels like")


