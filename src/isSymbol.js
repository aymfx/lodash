var baseGetTag = require('./_baseGetTag'), //基础的标签获取操作
    isObjectLike = require('./isObjectLike'); ////仅仅判断是不是对象  排除null

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {  //判断是不是Symbol
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag); //是对象 并且返回的是[object Symbol]
}

module.exports = isSymbol;
