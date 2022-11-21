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
};

module.exports = middle;
