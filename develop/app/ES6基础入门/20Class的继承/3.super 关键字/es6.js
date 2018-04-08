import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(() => {
    class A {
        constructor() {
            this.p = 1;
        }
        p() {
            return 20;
        }
    }

    class B extends A {
        constructor() {
            super();
            console.log(super.p()); // 2
        }
    }

    let b = new B();
     
})();