import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(() => {
    class Point { /* ... */ }

    class ColorPoint extends Point {
        constructor(...args) {
            super(...args)
        }
    }

    let cp = new ColorPoint(); // ReferenceError

     
})();