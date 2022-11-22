const assertEqual = require('./assertEqual');

//ACTUAL FUNCTION
//returns the "tail" of an array, everything except for the first item of the provided array
const tail = function (array) {
  return array.slice(1);
};

module.exports = tail;
