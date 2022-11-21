//function eqArrays which takes in two arrays and returns true or false, based on a perfect match
const eqArrays = require('./eqArrays');


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

module.exports = assertArraysEqual;

