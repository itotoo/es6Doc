import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(()=>{

    Symbol.for("bar") === Symbol.for("bar")

    var s1 = Symbol.for("foo");

})();

console.log( Symbol.keyFor(Symbol.for('foo')))
// "foo"
