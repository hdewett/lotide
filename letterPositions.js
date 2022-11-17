//Testing functions
const eqArrays = function (arry1, arry2) {
  if (arry1.length !== arry2.length) {
    return false;
  }
  for (let items in arry1) {
    if (arry1[items] !== arry2[items]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arry1, arry2) {
  let result = eqArrays(arry1,arry2);
  if (result === false) {
    console.log("Arrays are not equal.");
  } else if (result === true); {
    console.log("Arrays are equal.");
  }
};

//ACTUAL FUNCTION
//function will return all the indices in the string where each character is found
const letterPositions = function(sentence) {
  const results = {};
  let index = 0;
  for (let letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
    index++;
  }
  return results;
};

//TEST CASES
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
console.log(letterPositions("hello"));