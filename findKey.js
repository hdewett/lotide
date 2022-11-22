//function compares two values and console.logs if they are the same or not
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL FUNCTION
//function takes in an object and value, it scans the objects and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
const findKey = function (obj, callback) {
  const objKeys = Object.keys(obj);
  for (let key of objKeys) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;

//Test Cases
// let result1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2);

// let result2 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 3);

// let result3 = findKey({
//   "Husky":        { size: "Large", coat: "Long", Loud: true },
//   "Bichon Frise": { size: "Medium", coat: "Short", Loud: false },
//   "Chihuahua":    { size: "Small", coat: "Medium", Loud: true },
//   "Doberman":     { size: "Large", coat: "Short", Loud: false } ,
//   "Shiba Inu":    { size: "Medium", coat: "Short", Loud: true }
// }, x => x.size === "Small");

// let result4 = findKey({
//   "Husky":        { size: "Large", coat: "Long", Loud: true },
//   "Bichon Frise": { size: "Medium", coat: "Short", Loud: false },
//   "Chihuahua":    { size: "Small", coat: "Short", Loud: true },
//   "Doberman":     { size: "Large", coat: "Short", Loud: false } ,
//   "Shiba Inu":    { size: "Medium", coat: "Short", Loud: true }
// }, x => x.coat === "Medium");

// assertEqual(result1,"noma");
// assertEqual(result2,"Akaleri");
// assertEqual(result3,"Chihuahua");
// assertEqual(result4, undefined);

