//TEST/ASSERTION FUNCTIONS
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
  if (result===false) {
    console.log("Arrays are not equal.");
  } else if (result === true); {
    console.log("Arrays are equal.");
  }
};

// ACTUAL FUNCTION
//takes in an array and returns the middle-most elements of the given array
const middle = function (array) {
  if (array.length === 1 || array.length === 2){
    return [];
  }
  if (array.length%2===0) {
    return array.slice((array.length/2)-1, (array.length/2)+1);
  }
  else if (array.length%2!==0){
    return array.slice(array.length/2,array.length/2+1)
  }
}
//Test cases for arrays with one or two elements
// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []
assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])

//Test cases for arrays with odd number of elements 
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])

//Test cases for arrays with an even number of elements
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])