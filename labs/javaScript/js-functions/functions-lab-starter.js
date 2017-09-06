// Question 1 Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some Googling to figure this out if you forget how conditionals work.

function maxOfTwoNumbers(num1, num2) {
    if (num1 < num2) { 
        return num2
    }   
    else return num1; 
}

maxOfTwoNumbers(7, 10);

// Question 2 Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else return num3;
}
console.log(maxOfThree(2, 3, 1));





//3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.

function isCharacterAVowel(letter) {
    const lowerLetter = letter.toLowerCase();

   if (lowerLetter == "a" || lowerLetter == "e" || lowerLetter == "i" || lowerLetter == "o" || lowerLetter == "u") {
        return true;
    }
    else return false;
}

isCharacterAVowel("b");
isCharacterAVowel("O");



// Question 4

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
const addUs = [];
function sumArray(addUs) {
        let sum = 0;
    for(let i = 0; i < addUs.length; i++){
       sum += addUs[i];
    }
    return sum 
}
sumArray([1, 2, 3]);

// Question 4
const timesUs = [];
function multiplyArray(timesUs) {
    let product = 1; 
    for(let i = 0; i < timesUs.length; i++){
        product = product * timesUs[i];
    }
    return product  
}

multiplyArray([2, 4, 6]);


// Question 5 Write a function that returns the number of arguments passed to the function when called.

var numberOfArguments = function(num){
    const argumentCount= numberOfArguments.arguments.length;
    return argumentCount;
}

numberOfArguments(3, "taco")



// Question 6 Define a function reverseString that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".
var reverseString = function (string){
    let splitString = string.split("");
    let reversed = splitString.reverse().join("");
    return reversed;
};
reverseString("hammer");

// Question 7 Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.
const wordArray = [];

function findLongestWord (wordArray) {
    let longestWord = 0;
    for(let i = 0; i < wordArray.length; i++){
        if (wordArray[i].length > longestWord) {
            longestWord = wordArray[i].length;
        }
    }   
    return longestWord;
};

findLongestWord(["Hi", "Orange", "periwinkle"]);


// Question 8 Write a function filterLongWords that takes an array of words and a number i and returns a new array of words that are longer than i characters long.

const words = []; 
function filterLongWords (words) {
    const i = 4; 
    let longWords = [];
    for (let j = 0; j < words.length; j++) {
        if (words[j].length > i) {
            longWords.push(words[j]);
        }
    }
  return longWords;
}
console.log(filterLongWords["hello", "goodbye", "cya", ""]);


// Bonus 1
// Attach the function reverseString (from question 6) to the object String so that it is possible to call: "General Assembly".reverseString().

// Write a function that takes a string as an argument and returns an object where:

// the keys are the characters that occur in the string
// the values are the number of occurrences for each letter, regardless of the case
// For example, calling the function with the string "General Assembly" will return:




var reverseString = function (string){
    let splitString = string.split("");
    let reversed = splitString.reverse().join("");
    return reversed;
};
reverseString("hammer")

}

String.prototype.reverseString = function{
    return this.split("".reverse.join("");
};

// // console.log("Reerse this string".reverseString());


// // Bonus 2
// function charactersOccurencesCount() {

// }
