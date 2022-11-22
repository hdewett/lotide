//test functions
const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');




//Test Cases

console.log("takeUntilTest.js starts here");

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const results3 = takeUntil(data1, x => x===4);
const results4 = takeUntil(data1, x => (x+2)>7);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results3, [1, 2, 5, 7, 2, -1, 2]);
assertArraysEqual(results4, [1, 2, 5]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const results5 = takeUntil(data2, x => x.length > 5);
const results6 = takeUntil(data2, x => x.includes("ll"));

assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(results5, ["I've", "been", "to"]);
assertArraysEqual(results6, ["I've", "been", "to"]);

console.log("takeUntilTest.js ends here");