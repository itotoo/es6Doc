import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(()=>{
    let set = new Set().add('a').add('b').add('c');

    let [x,y] = set;
    // x='a'; y='b'

    let [first, ...rest] = set;
})();
