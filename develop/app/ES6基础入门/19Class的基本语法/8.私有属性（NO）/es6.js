import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(() => {
    // 估计不支持
    class Foo {
        // #a;
        // #b;
        // #sum() { return #a + #b; }
        // printSum() { console.log(#sum()); }
        // constructor(a, b) { #a = a; #b = b; }
    }
})();