//function will return all the indices in the string where each character is found
const letterPositions = function(sentence) {
  const results = {};
  let index = 0;
  for (let letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
    index++;
  }
  return results;
};

module.exports = letterPositions;
