//Test functions
const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

//TEST CASES
console.log("findKeyByValueTest.js starts here");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//test func takes input as assertEqual(actual, expected)
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); //should return drama
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

console.log("findKeyByValueTest.js ends here");