import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

// Promise.resolve()
(()=>{
    let thenable = {
        then: function(resolve, reject) {
            resolve(42);
        }
    };

    Promise.resolve(thenable)
    .then(function(value) {
        console.log(value);  // 42
    });


})();



