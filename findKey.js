//ACTUAL FUNCTION
//function takes in an object and value, it scans the objects and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
const findKey = function(obj, callback) {
  const objKeys = Object.keys(obj);
  for (let key of objKeys) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;

