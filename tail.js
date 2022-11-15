const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (list) {
  return list.slice(1);
};
//Test Case 1: Checking the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
//Test case 2: Making sure the original array is not modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
//Test case 3: An array with only one element should yield an empty array for its tail
const oneElement = [1];
assertEqual(tail(oneElement).length, 0);

//Test case 4: An empty array should yield an empty array for its tail
const emptyList = [];
tail(emptyList);
assertEqual(emptyList.length, 0);
