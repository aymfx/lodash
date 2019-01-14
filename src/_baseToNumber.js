var isSymbol = require('./isSymbol');

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;   //NaN

/**
 * The base implementation of `_.toNumber` which doesn't ensure correct
 * conversions of binary, hexadecimal, or octal string values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 */
function baseToNumber(value) {  //检测传入的值是否是
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {  
    return NAN;
  }
  return +value;  //尽量转成数字 
}
// s = Symbol();
// console.log(isSymbol('sss'))
// console.log(isSymbol(s))
// console.log(isSymbol(Array))

module.exports = baseToNumber;
