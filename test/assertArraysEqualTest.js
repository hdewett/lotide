//Test function
const assertArraysEqual = require('../assertArraysEqual');


//Test Cases
console.log("assertArraysEqualTest.js starts here");
assertArraysEqual([1,2,3],[1,2,3]); //should pass because they are same
assertArraysEqual(![1,2,3],[1,2,4]); //assertion should fail

console.log("assertArraysEqualTest.js ends here");