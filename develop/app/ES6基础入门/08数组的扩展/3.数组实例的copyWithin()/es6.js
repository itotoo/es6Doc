import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";
var arr = [1, 2, 3, 4, 5]
arr.copyWithin(1,0, 3);

console.log(arr);