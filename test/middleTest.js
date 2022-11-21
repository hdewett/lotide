//test function
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle Test cases for arrays with one or two elements", () => {
  let result1 = middle([1]);
  let expected1 = [];

  let result2 = middle([1, 2]);
  let expected2 = [];

  it("returns '[]' for array with only one element", () => {
    assert.deepEqual(result1, expected1);
  });

  it("returns '[]' for array with two element", () => {
    assert.deepEqual(result2, expected2); 
  });
  
});

describe("#middle Test cases for arrays with odd number of elements", () => {
  const result1 = middle([1, 2, 3]);
  const expected1 = [2];

  const result2 = middle([1, 2, 3, 4, 5]);
  const expected2 = [3];
  
  it("returns '[2]' for '[1, 2, 3]'", () => {
    assert.deepEqual(result1, expected1);
  });

  it("returns '[3]' for '[1, 2, 3, 4, 5]'", () => {
    assert.deepEqual(result2, expected2); 
  });

});

describe("#middle Test cases for arrays with an even number of elements", () => {
  const result1 = middle([1, 2, 3, 4]);
  const expected1 = [2, 3];

  const result2 = middle([1, 2, 3, 4, 5, 6]);
  const expected2 = [3, 4];
  
  it("returns '[2, 3]' for '[1, 2, 3, 4]'", () => {
    assert.deepEqual(result1, expected1);
  });

  it("returns '[3, 4]' for '[1, 2, 3, 4, 5, 6]'", () => {
    assert.deepEqual(result2, expected2); 
  });

});


