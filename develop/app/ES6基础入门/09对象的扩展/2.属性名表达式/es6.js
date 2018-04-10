import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";



var bool = false;
let obj = {
    [foo]: 'abc',
    [bool+'_']: true,
    ['h' + 'ello']() {
      return 'hi';
    }
};
// 属性名表达式与简洁表示法，不能同时使用
