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

//this function compares two arrays and console.logs whether they match or not
const assertArraysEqual = function (actual, expected) {
  let result = eqArrays(actual, expected);
  if (result === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};


//ACTUAL FUNCTION
// function will return a slice of the array with elements taken from the beginning until the callback/predicate returns a truthy value.

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === false) {
      results.push(item);
    } else {
      return results;
    }
  }
};

module.exports = takeUntil;

//Test Cases
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// const results3 = takeUntil(data1, x => x===4);
// const results4 = takeUntil(data1, x => (x+2)>7);

// assertArraysEqual(results1, [1, 2, 5, 7, 2]);
// assertArraysEqual(results3, [1, 2, 5, 7, 2, -1, 2]);
// assertArraysEqual(results4, [1, 2, 5]);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// const results5 = takeUntil(data2, x => x.length > 5);
// const results6 = takeUntil(data2, x => x.includes("ll"));

// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
// assertArraysEqual(results5, ["I've", "been", "to"]);
// assertArraysEqual(results6, ["I've", "been", "to"]);





