const eqArrays = function (arry1, arry2) {
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