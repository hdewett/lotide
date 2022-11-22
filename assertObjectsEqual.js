// Returns true if both objects have identical keys with identical values. Otherwise returns false
const eqObjects = require('./eqObjects');

//ACTUAL FUNCTION
//takes in two objects and console.logs an appropriate message to the console
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let result = eqObjects(actual,expected);
  if (result === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;
