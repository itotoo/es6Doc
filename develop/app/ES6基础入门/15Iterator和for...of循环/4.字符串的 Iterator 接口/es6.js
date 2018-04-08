import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(() => {
    var str = new String("hi");

    str[Symbol.iterator] = function () {
        return {
            next: function () {
                if (this._first) {
                    this._first = false;
                    return {
                        value: "bye",
                        done: false
                    };
                } else {
                    return {
                        done: true
                    };
                }
            },
            _first: true
        };
    };

    console.log('*-*----9998888',[...str]) // ["bye"]
    console.log(str) // "hi"
    
})();