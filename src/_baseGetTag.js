var Symbol = require('./_Symbol'), // 获取到环境中的Symbol
    getRawTag = require('./_getRawTag'), // 获取 元素的标签名 [Oject Object]
    objectToString = require('./_objectToString'); // //原生的对象转换成  "[object Array]"

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) { //基础的标签获取操作 
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value)) //获取基准的tag标签
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;
