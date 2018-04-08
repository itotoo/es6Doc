import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(()=>{
    const preloadImage = function (path) {
        return new Promise(function (resolve, reject) {
            var image = new Image();
            image.onload  = resolve;
            image.onerror = reject;
            image.src = path;
        });
    };
})();



