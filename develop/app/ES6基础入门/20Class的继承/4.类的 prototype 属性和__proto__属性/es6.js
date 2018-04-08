import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(() => {
    class A {
        constructor(){

        }
        do(){
            console.log('do....')
        }
    }

    class B extends A {
        constructor(){
            super();
        }
        some(){
            console.log('some....')
        }
    }

    var p1 = new A(2, 3);
    var p2 = new B(2, 3, 'red');

    p2.__proto__.__proto__.printName = function () {
        console.log('Ha');
    };

    p1.printName() // "Ha"

    console.log(p1.__proto__);
    console.log(p2.__proto__);
     
})();