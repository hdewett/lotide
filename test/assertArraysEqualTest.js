//Test function
const assertArraysEqual = require('../assertArraysEqual');


//Test Cases
assertArraysEqual([1,2,3],[1,2,3]); //should return true because they are same
assertArraysEqual([1,2,3],[1,2,4]); //should return false