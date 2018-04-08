import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";
(()=>{
    const obj = {
        get foo() {},
        set foo(x) {}
    };
    const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');
    let a = descriptor.get.name // "get foo"

    console.log(a);
})();
// bound anonymous description