const assertEqual = require('../assertEqual');

//Test Code
console.log("assertEqualTest.js starts here");

console.log(assertEqual("Lighthouse Labs", "Bootcamp")); //assertion should fail
console.log(assertEqual(1, 1));
console.log(assertEqual("Bootcamp", "Bootcamp"));
console.log(assertEqual(1, 4)); //assertion should fail

console.log("assertEqualTest.js ends here");