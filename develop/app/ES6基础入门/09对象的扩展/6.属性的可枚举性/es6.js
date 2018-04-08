import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";
(()=>{
    let obj = { foo: 123 };
    let objs = Object.getOwnPropertyDescriptor(obj, 'foo');
    //  {
    //    value: 123,
    //    writable: true,
    //    enumerable: true,
    //    configurable: true
    //  }
    console.log(objs.configurable);
})();
