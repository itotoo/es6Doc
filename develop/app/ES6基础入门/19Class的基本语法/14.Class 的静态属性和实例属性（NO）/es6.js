import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(() => {
    // class MyClass {
    //     static myProp = 42;

    //     constructor() {
    //         console.log(this.myProp); // 42
    //     }
    // };

    // class MyClass2 {
    //     static myStaticProp = 42;

    //     constructor() {
    //         console.log(MyClass.myStaticProp); // 42
    //     }
    // }
})();