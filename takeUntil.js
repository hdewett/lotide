// function will return a slice of the array with elements taken from the beginning until the callback/predicate returns a truthy value.

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === false) {
      results.push(item);
    } else {
      return results;
    }
  }
};

module.exports = takeUntil;





