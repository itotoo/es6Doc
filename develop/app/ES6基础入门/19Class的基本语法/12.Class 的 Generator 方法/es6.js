import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(() => {
    class foo{
        constructor(...args){
            this.args = args;
        }
        *[Symbol.iterator](){
            for(let arg  of this.args){
                yield arg;
            }
        }
    }
     for(let x of new foo("HELLO","world")){
         console.log(x)
     }
})();