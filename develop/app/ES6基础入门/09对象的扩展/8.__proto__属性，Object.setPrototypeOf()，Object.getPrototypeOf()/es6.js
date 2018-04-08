import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";
(()=>{
    var obj = {
        method: function() {
            
        }
    };
    obj.__proto__ = {
        y:"yyy"
    };
    console.log(obj );
})();

(()=>{
    function objs(){};
    objs.prototype.addss = function(){
        console.log('123');
    };
    var obj = new objs();
    Object.setPrototypeOf(obj, {
        x:1
    });
    console.log(obj);

    console.log(Object.getPrototypeOf(obj))
})();