const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function (arry1, arry2) {
  if (arry1.length !== arry2.length) {
    console.log("Array lengths do not much. Arrays are not equal.");
    return false;
  }
  for (let items in arry1) {
    if (arry1[items] !== arry2[items]) {
      console.log("Arrays are not equal.");
      return false;
    }
  }
  console.log("Arrays are equal.");
  return true;
};

const without = function (source, itemsToRemove) {
  let sourceCopy = [...source];
  for (let sourceItems of sourceCopy) {
    for (let removeItems of itemsToRemove) {
      if (sourceItems === removeItems) {
        let removeIndex = sourceCopy.indexOf(sourceItems);
        sourceCopy.splice(removeIndex,1);
      }
    }
  }
  return sourceCopy;
};

// Test Cases
// without([1, 2, 3], [1]);
// without(["1", "2", "3"], [1, 2, "3"]);
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);