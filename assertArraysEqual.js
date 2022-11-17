//function eqArrays which takes in two arrays and returns true or false, based on a perfect match
const eqArrays = function (arry1, arry2) {
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

//ACTUAL FUNCTION
//this function compares two arrays and console.logs whether they match or not
const assertArraysEqual = function (actual, expected) {
  let result = eqArrays(actual, expected);
  if (result === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

//TEST CASES
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[1,2,4]);