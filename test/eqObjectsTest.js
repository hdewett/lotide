const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

// TEST CASES
console.log("eqObjectsTest.js starts here");

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => should return true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => should return false

console.log("eqObjectsTest.js ends here");