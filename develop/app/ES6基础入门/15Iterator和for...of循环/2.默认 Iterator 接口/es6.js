import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(()=>{
    let obj = {
        data: [ 'hello', 'world' ],
        [Symbol.iterator]() {
            const self = this;
            let index = 0;
            return {
            next() {
                if (index < self.data.length) {
                return {
                    value: self.data[index++],
                    done: false
                };
                } else {
                return { value: undefined, done: true };
                }
            }
            };
        }
    };

    let iter = obj[Symbol.iterator]();
    console.log('*--***-**',iter.next());
    console.log('*--***-**',iter.next());

})();
