import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";
(()=>{
    const obj = {
        foo: 123,
        get bar() { return 'abc' }
    };

    let objs = Object.getOwnPropertyDescriptors(obj);
    console.log(objs);
})();

(()=>{
    const source = {
        set foo(value) {
            console.log(value);
        }
    };

    console.log(source)
    const target1 = {};
    Object.assign(target1, Object.getOwnPropertyDescriptors(source));
    console.log(target1);
})();
