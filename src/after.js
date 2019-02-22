var toInteger = require('./toInteger');  //去整数

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function'; //异常处理

/**
 * The opposite of `_.before`; this method creates a function that invokes
 * `func` once it's called `n` or more times.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {number} n The number of calls before `func` is invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var saves = ['profile', 'settings'];
 *
 * var done = _.after(saves.length, function() {
 *   console.log('done saving!');
 * });
 *
 * _.forEach(saves, function(type) {
 *   asyncSave({ 'type': type, 'complete': done });
 * });
 * // => Logs 'done saving!' after the two async saves have completed.
 */
function after(n, func) {  //函数用于最后一个再调用，等其他结束之后
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n); 
  return function() {
    if (--n < 1) {
      return func.apply(this, arguments);
    }
  };
}
// a = [1,2,3,4.5]

// s= after(a.length,()=>{console.log('done')})
// a.map(ele =>{
//   s()
// })
module.exports = after;
