//function takes in an array and a callback function, it applies the callback function to each item in the array and appends it to an array, returning the new array at the end. In this case, the callback function is returning the element found at index of 0 of each element of the array.
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
