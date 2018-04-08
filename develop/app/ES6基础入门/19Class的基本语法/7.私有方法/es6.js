import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(() => {
    const bar = Symbol('bar');
    const snaf = Symbol('snaf');

    class myClass{

        // 公有方法
        foo(baz) {
            return this[bar](baz);
        }
        // 私有方法
        _bar(baz) {
            return this.snaf = baz;
        }
        // 私有方法
        [bar](baz) {
            return this[snaf] = baz;
        }

        // ...
    };

    let a = new myClass();
    console.log('**',a.foo('12345'));
})();