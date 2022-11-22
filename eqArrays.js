const assertEqual = require('./assertEqual');

//ACTUAL FUNCTION
//function eqArrays which takes in two arrays and returns true or false, based on a perfect match

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let items in array1) {
    if (array1[items] !== array2[items]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
