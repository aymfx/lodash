var baseGetTag = require('./_baseGetTag'), //基础的标签获取操作
    isObjectLike = require('./isObjectLike'); //仅仅判断是不是对象  排除null

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {  //判断是不是argument对象
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


function name() {
    console.log(Object.prototype.toString.call(arguments),12121) //[object Arguments]
}

name()