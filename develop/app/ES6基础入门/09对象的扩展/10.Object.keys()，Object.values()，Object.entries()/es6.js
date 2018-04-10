import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";

// 返回一个数组
// Object.keys 对象自身的（不含继承的）所有可遍历（enumerable）属性的键名
// Object.values 同上属性的键值
// Object.entries 同上属性的键值对数组

// 会过滤属性名为 Symbol
// 字符串会先将其转为对象，会转成类数组的对象
(()=>{
    let {keys, values, entries} = Object;
    let obj = { a: 1, b: 2, c: 3 };
    console.log(keys(obj));
    console.log(values(obj));
    console.log(entries(obj));
})();
