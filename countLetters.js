//function counts number of times a letter shows up in a string
const countLetters = function(str) {
  let lowerStr = str.toLowerCase();
  const letterCount = {};
  for (let letter of lowerStr) {
    if (letter !== " ") {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount;
};

module.exports = countLetters;

