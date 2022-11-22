const assertEqual = require('../assertEqual');
const findKey = require('../findKey');


//Test Cases
console.log("findKeyTest.js starts here");

let result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

let result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3);

let result3 = findKey({
  "Husky":        { size: "Large", coat: "Long", Loud: true },
  "Bichon Frise": { size: "Medium", coat: "Short", Loud: false },
  "Chihuahua":    { size: "Small", coat: "Medium", Loud: true },
  "Doberman":     { size: "Large", coat: "Short", Loud: false } ,
  "Shiba Inu":    { size: "Medium", coat: "Short", Loud: true }
}, x => x.size === "Small");

let result4 = findKey({
  "Husky":        { size: "Large", coat: "Long", Loud: true },
  "Bichon Frise": { size: "Medium", coat: "Short", Loud: false },
  "Chihuahua":    { size: "Small", coat: "Short", Loud: true },
  "Doberman":     { size: "Large", coat: "Short", Loud: false } ,
  "Shiba Inu":    { size: "Medium", coat: "Short", Loud: true }
}, x => x.coat === "Medium");

//test func takes input as assertEqual(actual, expected)
assertEqual(result1,"noma");
assertEqual(result2,"Akaleri");
assertEqual(result3,"Chihuahua");
assertEqual(result4, undefined);

console.log("findKeyTest.js ends here");
