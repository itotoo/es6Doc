// undefined null string number boolean object sysbol
import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(()=>{
    let SymbolS = Symbol('');
    console.log(typeof s);
    // "symbol"
    console.log(SymbolS.toString() + 123)
    

})();