import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(() => {
    class Foo {
        static classMethod() {
            console.log( 'hello');
        }
    }

    class Bar extends Foo {
    }

    Bar.classMethod() // 'hello'
})();