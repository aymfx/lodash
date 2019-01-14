var freeGlobal = require('./_freeGlobal');  //获取node全局变量 golbal

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self; //检测自由变量`self`。

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')(); //用作对全局对象的引用

module.exports = root;
