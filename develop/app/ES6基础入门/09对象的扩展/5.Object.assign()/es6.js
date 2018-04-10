import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";

// Object.assign方法用于对象的合并是
// 由于undefined和null无法转成对象
// 浅拷贝(对象的任何变化，都会反映到目标对象上面)
// 同名属性的替换
// 数组视为对象，位置覆盖
// 函数的处理， get 方法 求值后再复制。
// 不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）。


// 用途
// 为对象添加属性
// 为对象添加方法
// 克隆合并
var target = { a: 1, b: 1 ,c: { b: 'c', d: 'e' }};
var source1 = { b: 2, c: { b: 'hello' } };
var source2 = { 
    [Symbol('c')]: 'd',
    some(){
        console.log('some')
    }
};
Object.assign(target, source1, source2);
console.log(target)
