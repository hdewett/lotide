const assertEqual = require('./assertEqual');

//ACTUAL FUNCTION
//returns the "tail" of an array, everything except for the first item of the provided array
const tail = function (list) {
  return list.slice(1);
};

module.exports = tail;
