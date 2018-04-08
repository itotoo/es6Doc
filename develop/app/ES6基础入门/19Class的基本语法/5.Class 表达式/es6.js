import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(() => {
    let person = new class{
        constructor(name){
            this.name = name.name;
        }
        sayName(){
            console.log(this.name);
        }
    }({
        name:"张三"
    });
    person.sayName();

     
})();