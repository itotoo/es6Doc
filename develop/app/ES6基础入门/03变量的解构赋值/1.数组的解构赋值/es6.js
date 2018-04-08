import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";

// 解构赋值
// 提取值进行赋值

let [x, y, ...z] = ['a','b'];
console.log(x,y,z);

let [head, ...tail] = [1, 2, 3, 4];
console.log(head,tail);

// 默认值
let [foo = true] = [];
console.log(foo);

// 惰性求值
function fn() {
    return 'aaa';
}
let [fns = fn()] = [];
console.log(fns);

