import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(()=>{

    var obj = {};
    var a = Symbol('a');
    var b = Symbol('b');

    obj[a] = 'Hello';
    obj[b] = 'World';

    var objectSymbols = Object.getOwnPropertySymbols(obj);

    console.log(objectSymbols)
    // [Symbol(a), Symbol(b)]

})();