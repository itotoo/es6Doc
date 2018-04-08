import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";
(()=>{
    var target = { a: 1, b: 1 };

    var source1 = { b: 2, c: 2 };
    var source2 = { c: 3 };

    Object.assign(target, source1, source2);
    target // {a:1, b:2, c:3}
})();

(()=>{
    var target = { a: { b: 'c', d: 'e' } }
    var source = { 
        a: { b: 'hello' } ,
        some(){
            console.log('some')
        }
    }
    let obj = Object.assign(target, source);
    console.log(obj);
})();
