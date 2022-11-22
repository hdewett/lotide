const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

//Test case
console.log("countLettersTest.js starts here");
let str="lighthouse in the house"
const result1 = countLetters(str);

//using format assertEqual(actual, expected)
assertEqual(result1["l"], 1); //should pass because l shows up only 1 time
assertEqual(result1["h"], 4); //should pass because h shows up only 4 times
console.table(result1);
console.log("countLettersTest.js ends here");