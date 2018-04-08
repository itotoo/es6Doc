import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(() => {
    function mix(...mixins) {
        class Mix {}

        for (let mixin of mixins) {
            copyProperties(Mix, mixin);
            copyProperties(Mix.prototype, mixin.prototype);
        }

        return Mix;
    }

    function copyProperties(target, source) {
        for (let key of Reflect.ownKeys(source)) {
            if ( key !== "constructor"
            && key !== "prototype"
            && key !== "name"
            ) {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc);
            }
        }
    }
    class DistributedEdit extends mix(Loggable, Serializable) {
    // ...
    }
})();