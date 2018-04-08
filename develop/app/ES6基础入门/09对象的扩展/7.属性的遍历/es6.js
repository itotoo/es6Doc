import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";
(()=>{
    // getOwnPropertyDescriptor
    let obj = { [Symbol('ok')]:0, b:0, 10:0, 2:0, a:0 }
    for( let i in obj){
        console.log(i)
    }
})();

(()=>{
    // getOwnPropertyDescriptor
    let obj = { [Symbol('ok')]:0, b:0, 10:0, 2:0, a:0 };
    Object.defineProperty(obj, 'invisible', {
        enumerable: false,
        value: 'hello'
    })
    console.log(Object.keys(obj))
})();

(()=>{
    // getOwnPropertyDescriptor
    let obj = { 
        [Symbol('ok')]:0, b:0, 10:0, 2:0, a:0 ,

    };
    Object.defineProperty(obj, 'invisible', {
        enumerable: false,
        value: 'hello'
    })
    console.log(Object.getOwnPropertyNames(obj))
})();

(()=>{
    // getOwnPropertyDescriptor
    let obj = { [Symbol('ok')]:0, b:0, 10:0, 2:0, a:0 };
    console.log(Object.getOwnPropertySymbols(obj))
})();

(()=>{
    // getOwnPropertyDescriptor
    let obj = { [Symbol('ok')]:0, b:0, 10:0, 2:0, a:0 };
    console.log(Reflect.ownKeys(obj))
})();