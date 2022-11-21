const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


//TEST CASES
//test with integers
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

//check with string input
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
//check with different variable types in array
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false