import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(() => {
    // #支持
    // const ok = require('./moduless');
    // import {customName} from './moduless';
    let arr = [1,2,3];
    console.log(Math.max.apply(arr))

     
})();