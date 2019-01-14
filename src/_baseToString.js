var Symbol = require('./_Symbol'),  //返回内置对象Symbol
    arrayMap = require('./_arrayMap'), //map函数 
    isArray = require('./isArray'),  //判断是不是数组
    isSymbol = require('./isSymbol'); //判断是不是symbol

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0; //Infinity  无穷大

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

// 转成字符串
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';  //隐式调用Stirng.toString()
  }
  // console.log(value)
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result; //INFINITY 判断正负零
}

module.exports = baseToString;

// console.log(baseToString([21,3,3,4]))
