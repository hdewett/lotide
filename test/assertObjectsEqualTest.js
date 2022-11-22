//takes in two objects and console.logs an appropriate message to the console
const assertObjectsEqual = require('../assertObjectsEqual')

// TEST CASES
console.log("assertObjectsEqualTest.js starts here");

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd,dc); // should pass because they are the same
assertObjectsEqual(cd,cd2); // should fail because they are not the same

console.log("assertObjectsEqualTest.js ends here");