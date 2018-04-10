import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";

// name 属性
// bind方法创造的函数 加上bound
// Function构造函数创造的函数 加上anonymous
// 对象的方法是一个 Symbol 值,返回的是Symbol 值的描述。

const obj = {
    get foo() {},
    set foo(x) {}
};
console.log(obj.foo.name);