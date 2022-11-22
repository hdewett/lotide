//Test functions
const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

//TEST CASES

console.log("letterPositionsTest.js starts here");

assertArraysEqual(letterPositions("hello").h, [0]); 
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
console.log(letterPositions("hello"));

console.log("letterPositionsTest.js ends here");