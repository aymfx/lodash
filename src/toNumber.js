var isObject = require('./isObject'), //// Object判断
    isSymbol = require('./isSymbol'); ////判断是不是Symbol

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

console.log(reTrim.test('sss')) //用于匹配前或者后面的空格   /^\s+|\s+$/g

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i; //用于检测错误的带符号十六进制字符串值

console.log(reIsBadHex.test('-0x121222'),121212)
/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;  //j检测是不是二进制数



/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;  //检测八进制数

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;  //

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {  //转换成number类型
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;  

// console.log(toNumber(0x1222f))
// console.log(reIsBadHex.test('0x1222f'),122222222)