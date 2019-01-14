var baseToNumber = require('./_baseToNumber'),  //返回number
    baseToString = require('./_baseToString');  //返回string

/**
 * Creates a function that performs a mathematical operation on two values.
 *
 * @private
 * @param {Function} operator The function to perform the operation.
 * @param {number} [defaultValue] The value used for `undefined` arguments.
 * @returns {Function} Returns the new mathematical operation function.
 */



function createMathOperation(operator, defaultValue) {  //做一个数字的过滤判断 
  return function(value, other) {
    var result;
    if (value === undefined && other === undefined) {  //
      return defaultValue;
    }
    if (value !== undefined) {
      result = value;
    }
    if (other !== undefined) {
      if (result === undefined) {
        return other;
      }
      // 两个都存在 进行类型判断
      if (typeof value == 'string' || typeof other == 'string') { //判断是不是字符串
        value = baseToString(value);
        other = baseToString(other);
      } else {
        value = baseToNumber(value); 
        other = baseToNumber(other);
      }
      result = operator(value, other);
    }
    return result;
  };
}

module.exports = createMathOperation;
