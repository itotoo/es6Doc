import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(()=>{
    function* f() {
        console.log('执行了！')
    }

    var generator = f();

    setTimeout(function () {
        generator.next()
    }, 2000);
})();
