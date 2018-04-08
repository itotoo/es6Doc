import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(() => {
    class point {
        constructor(x,y){
            this.x = x;
            this.y = y;
        }
        do(){
            console.log('do......');
        }
        some(){
            console.log('some......');
        }
    }
    var b = new point();
    b.__proto__.some = function(){
        console.log('some2......');
    };
    b.__proto__.ok = function(){
        console.log('ok......');
    };
    b.some();
    b.ok();
    console.log(point.prototype );

     
})();