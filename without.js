//function will remove a subset of a given array and remove unwanted elements
const without = function(source, itemsToRemove) {
  let sourceCopy = [...source];
  for (let sourceItem of sourceCopy) {
    for (let removeItem of itemsToRemove) {
      if (sourceItem === removeItem) {
        let removeIndex = sourceCopy.indexOf(sourceItem);
        sourceCopy.splice(removeIndex,1);
      }
    }
  }
  return sourceCopy;
};

module.exports = without;

