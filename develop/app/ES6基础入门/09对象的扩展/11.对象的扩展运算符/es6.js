import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";

// ES2018 将这个运算符引入了对象。
// 目前不支持对象
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x,y,z)
