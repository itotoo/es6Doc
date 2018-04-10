import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";


// ES2016 做了一点修改，规定只要
// 函数参数使用了默认值、解构赋值、或者扩展运算符，
// 那么函数内部就不能显式设定为严格模式，否则会报错。
// 这样规定的原因是，函数内部的严格模式，同时适用于函数体和函数参数,参数却应该先于函数体执行。

// 报错
// function doSomething(value = 070) {
//     'use strict';
//     return value;
// }

'use strict';
function doSomething(a, b = a) {
  // code
}
