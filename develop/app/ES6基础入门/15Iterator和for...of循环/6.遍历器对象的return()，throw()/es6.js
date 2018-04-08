import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(() => {
    // 或者采用下面的简洁写法

    let obj = {
        * [Symbol.iterator]() {
            yield 'hello';
            yield 'world';
        },
        return() {
            return { done: true };
        },
    };

    for (let x of obj) {
        console.log(x);
        break;
    }
    // hello
    // world
})();