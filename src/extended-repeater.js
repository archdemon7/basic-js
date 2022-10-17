const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = str + '';
  let result = '';

  let repeatTimes = options.repeatTimes || 1,
  additionRepeatTimes = options.additionRepeatTimes || 1,
  separator = options.separator || '+',
  additionSeparator = options.additionSeparator || '|',
  addition = options.addition + '' || '';

  let subStr = [],
  subStrResult = ''
  if (additionRepeatTimes) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      subStr.push(addition);
    }
    subStrResult = subStr.join(`${additionSeparator}`);
  } else {
    subStrResult += addition;
  }
  subStr = []
  if (repeatTimes ) {
    for (i = 0; i < repeatTimes; i++) {
      if (subStrResult != 'undefined') {
        subStr.push(string + subStrResult)
      } else {
        subStr.push(string)
      }
      
    }
    result = subStr.join(`${separator}`);
  } else {
    result += string;
  }
  return result
}

module.exports = {
  repeater
};
