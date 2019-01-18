var eq = require('./eq'), //两个数的值和类型比较 
    isArrayLike = require('./isArrayLike'), //是不是类数组
    isIndex = require('./_isIndex'), ////判断value是否是有效的下标
    isObject = require('./isObject'); // Object判断

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) { //检查给定的参数是否可迭代
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;

let s = [1,2,3,4,5,6,7]


console.log(isIterateeCall(1,0,s),'ssasasa')