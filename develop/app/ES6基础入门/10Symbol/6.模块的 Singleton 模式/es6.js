import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

let global = window;

(()=>{
    const FOO_KEY = Symbol('foo');
    function A() {
        this.foo = '固定一个值';
    }
    if (!global[FOO_KEY]) {
        global[FOO_KEY] = new A();
    }
    global[FOO_KEY] = 123;
    console.log(global[FOO_KEY]);


})();

