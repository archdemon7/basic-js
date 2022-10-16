const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0,
  nLength = (n + '').length;
  for (let i = 0; i < nLength; i++) {
    let nStr = (n + '').split('');
    nStr.splice(i, 1);
    if (result < +nStr.join('')) {
      result = +nStr.join('');
    }
  }
  return result;
}

module.exports = {
  deleteDigit
};
