//function eqArrays which takes in two arrays and returns true or false, based on a perfect match
const eqArrays = function(arry1, arry2) {
  if (arry1.length !== arry2.length) {
    return false;
  }
  for (let items in arry1) {
    if (arry1[items] !== arry2[items]) {
      return false;
    }
  }
  return true;
};

//this function compares two arrays and console.logs whether they match or not
const assertArraysEqual = function(actual, expected) {
  let result = eqArrays(actual, expected);
  if (result === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

//ACTUAL FUNCTION
//function takes in an array and a callback function, it applies the callback function to each item in the array and appends it to an array, returning the new array at the end. In this case, the callback function is returning the element found at index of 0 of each element of the array.
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

//TEST CASES
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);
// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

// const dogs = ["Husky", "Bichon Frise", "Poodle", "Pug"];
// const results2 = map(dogs, dog => dog[1]);
// assertArraysEqual(results2, ["u", "i", "o", "u"]);

// const results3 = map(dogs, dog => dog.length);
// assertArraysEqual(results3, [5, 12, 6, 3]);

// const results4 = map(dogs, dog => dog.toUpperCase());
// assertArraysEqual(results4, ["HUSKY", "BICHON FRISE", "POODLE", "PUG"]);