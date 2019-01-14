/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
// console.log(freeGlobal)
console.log(freeGlobal.Object)
// console.log(typeof global == 'object')
module.exports = freeGlobal;

// 从Node.js中检测自由变量`global`