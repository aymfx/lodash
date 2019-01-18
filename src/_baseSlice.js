/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) { //遍历切割指定数组
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  console.log((length >>>= 0));   //无符号右移
  start >>>= 0;
  // console.log(start, start >>>= 0)
  var result = Array(length); //切割数组到新的字符串中
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;

console.log(baseSlice([1, 2, 3, 4, 5], 2, 4),'-------')
