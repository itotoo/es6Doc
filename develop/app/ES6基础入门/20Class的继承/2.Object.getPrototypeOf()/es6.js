import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(() => {
    class Point { /* ... */ }

    class ColorPoint extends Point {
        constructor(...args) {
            super(...args);
        }
        some(){
            if(Object.getPrototypeOf(ColorPoint) === Point){
                console.log('继承父类...');
            }
        }
    }

    let cp = new ColorPoint(); // ReferenceError
    cp.some();



     
})();