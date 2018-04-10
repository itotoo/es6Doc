import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";

// Object.is比较两个值是否相等

+0 === -0 //true
NaN === NaN // false
// 扩展
Object.defineProperty(Object, 'is', {
    value: function(x, y) {
        if (x === y) {
            // 针对+0 不等于 -0的情况
            return x !== 0 || 1 / x === 1 / y;
        }
        // 针对NaN的情况
        return x !== x && y !== y;
    },
    configurable: true,
    enumerable: false,
    writable: true
});

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true

