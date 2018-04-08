import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(()=>{
    function * numbers () {
        yield 1
        yield 2
        return 3
        yield 4
    }
    console.log(numbers())
    console.log(numbers().next());
})();