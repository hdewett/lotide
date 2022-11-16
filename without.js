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

const without = function (source, itemsToRemove) {
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

// Test Cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);