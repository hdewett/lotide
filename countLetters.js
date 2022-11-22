//function compares two values and console.logs if they are the same or not
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function counts number of times a letter shows up in a string
const countLetters = function(str) {
  let lowerStr = str.toLowerCase();
  const letterCount = {};
  for (let letter of lowerStr) {
    if (letter !== " ") {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount;
};

module.exports = countLetters;

//Test case
// let str="lighthouse in the house"
// const result1 = countLetters(str);
// assertEqual(result1["l"], 1);
// console.table(result1);
