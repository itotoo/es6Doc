import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";
(()=>{
    // 不支持
    // let obj = { a: { b: 1 } };
    // let { ...x } = obj;
    // obj.a.b = 2;
    // x.a.b // 2
})();
