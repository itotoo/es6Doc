import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(()=>{

    var mySymbol = Symbol();
    var mySymbol2 = Symbol();
    // 第二种写法
    var a = {
        [mySymbol]: 'Hello!',
        [mySymbol2](){
            console.log(123)
        }
    };
    // 以上写法都得到同样结果
    console.log(a[mySymbol]);
    console.log(a[mySymbol2]());

})();