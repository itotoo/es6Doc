import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";
(()=>{
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

    Object.is(NaN, NaN) // true
})();