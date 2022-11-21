const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail Checking the returned array elements", () => {
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  const expected = ["Lighthouse", "Labs"]
  
  it("returns '2' for result.length", () => {
    assert.strictEqual(result.length, 2);
  });

  it("returns 'Lighthouse' for result[0]", () => {
    assert.equal(result[0], "Lighthouse"); 
  });

  it("returns 'Labs' for result[1]", () => {
    assert.deepEqual(result, expected); 
  });

});

describe("#tail Making sure the original array is not modified", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  tail(words);

  it("returns '3' for words.length", () => {
    assert.strictEqual(words.length, 3);
  });

});

describe("#tail Checking that an array with only one element should yield an empty array for its tail", () => {
  const oneElement = tail([1]);

  it("returns '0' for oneElement.length", () => {
    assert.strictEqual(oneElement.length, 0);
  });

});

describe("#tail An empty array should yield an empty array for its tail", () => {
  const emptyList = [];
  tail(emptyList);

  it("returns '0' for emptyList.length", () => {
    assert.strictEqual(emptyList.length, 0);
  });

});
