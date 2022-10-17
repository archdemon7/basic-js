const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    result.push([])
    for (let j = 0; j < matrix[0].length; j++) {
      let sum = 0;
      for (let t = -1; t <= 1; t++) {
        for (let p = -1; p <= 1; p++) {
          if(t === 0 && p === 0) {continue}
          if (matrix[i + t] && matrix[i + t][j + p] && matrix[i + t][j + p] === true) {sum++}
          }
        }
      result[i].push(sum)
    }
  }
  return result
}

module.exports = {
  minesweeper
};
