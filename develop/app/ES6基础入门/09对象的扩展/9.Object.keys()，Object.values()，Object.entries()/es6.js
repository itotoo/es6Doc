import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";
(()=>{
    let {keys, values, entries} = Object;
    let obj = { a: 1, b: 2, c: 3 };
    console.log(keys(obj));
    console.log(values(obj));
    console.log(entries(obj));


    for (let [k, v] of Object.entries(obj)) {
        console.log(
            `${k}:${v}`
        );
    }



})();
