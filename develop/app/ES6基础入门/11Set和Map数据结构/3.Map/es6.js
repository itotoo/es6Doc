import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

// set 有去掉重复值的功能
(()=>{
    const map = new Map();
    map.set('foo',123);
    map.set('bar',456);
    map.delete('bar');
    map.has('bar');
    console.log(map);
    console.log(map.get('foo'));
    console.log(map.size);
    map.clear();
})();

