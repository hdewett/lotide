const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');

//TEST CODE
console.log("countOnlyTest.js starts here");
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

//using format assertEqual(actual, expected)
assertEqual(result1["Jason"], 1); // should return 1
assertEqual(result1["Karima"], undefined); // should return undefined
assertEqual(result1["Fang"], 2); // //should return 2
assertEqual(result1["Agouhanna"], undefined); //should return undefined

console.log("countOnlyTest.js ends here");