const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let counter = 1;
    while (str[i] == str[i+1]){
      counter++;
      i++;
    }
    if (counter > 1) {
      result += counter + str[i];
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
