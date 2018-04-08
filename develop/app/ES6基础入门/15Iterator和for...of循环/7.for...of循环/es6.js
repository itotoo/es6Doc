import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(() => {
    let arrayLike = { length: 2, 0: 'a', 1: 'b' };
    // 正确
    for (let x of Array.from(arrayLike)) {
    console.log(x);
    }
})();