//Test functions
const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');


//TEST CASES

console.log("mapTest.js starts here");

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const dogs = ["Husky", "Bichon Frise", "Poodle", "Pug"];
const results2 = map(dogs, dog => dog[1]);
assertArraysEqual(results2, ["u", "i", "o", "u"]);

const results3 = map(dogs, dog => dog.length);
assertArraysEqual(results3, [5, 12, 6, 3]);

const results4 = map(dogs, dog => dog.toUpperCase());
assertArraysEqual(results4, ["HUSKY", "BICHON FRISE", "POODLE", "PUG"]);

console.log("mapTest.js ends here");