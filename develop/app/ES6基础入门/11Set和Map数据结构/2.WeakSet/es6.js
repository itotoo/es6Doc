import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

// set 有去掉重复值的功能
(()=>{
    const ws = new WeakSet();
    const obj = {};
    const foo = {};

    ws.add(window);
    ws.add(obj);

    ws.has(window); // true
    ws.has(foo);    // false

    ws.delete(window);
    ws.has(window);    // false
})();

