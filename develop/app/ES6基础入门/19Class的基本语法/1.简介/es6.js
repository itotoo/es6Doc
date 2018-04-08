import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(() => {
    class point {
        do(){
            console.log('do......');
        }
        some(){
            console.log('do......');
        }
    }
    var b = new point();
    b.do();
    console.log(point.prototype );

     
})();