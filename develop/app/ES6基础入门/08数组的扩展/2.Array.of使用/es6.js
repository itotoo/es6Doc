import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

console.log(Array())
console.log(Array(3)[0])

Array.of(3, 11, 8) // [3,11,8]