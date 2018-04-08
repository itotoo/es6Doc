import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(()=>{
    function* f() {
        for(var i = 0; true; i++) {
            var reset = yield i;
            if(reset) { i = -1; }
        }
    }

    var g = f();

    console.log(g.next()) // { value: 0, done: false }
    console.log(g.next()) // { value: 1, done: false }
    console.log(g.next(true)) // { value: 0, done: false }
})();

(()=>{
    function* dataConsumer() {
        console.log('Started');
        console.log(`1. ${yield}`);
        console.log(`2. ${yield}`);
        return 'result';
    }

    let genObj = dataConsumer();
    genObj.next();
    // Started
    genObj.next('a')
    // 1. a
    genObj.next()
})();
