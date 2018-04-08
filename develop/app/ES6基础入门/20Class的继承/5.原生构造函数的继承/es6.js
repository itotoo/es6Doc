import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(() => {
    class VersionedArray extends Array {
        constructor() {
            super();
            this.history = [[]];
        }
        commit() {
            this.history.push(this.slice());
        }
        revert() {
            this.splice(0, this.length, ...this.history[this.history.length - 1]);
        }
    }

    var x = new VersionedArray();

    x.push(1);
    x.push(2);
    x // [1, 2]
     
})();