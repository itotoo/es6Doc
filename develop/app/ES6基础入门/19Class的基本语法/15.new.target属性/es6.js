import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(() => {
    // function Person(name) {
    //     if (new.target === Person) {
    //         this.name = name;
    //     } else {
    //         throw new Error('必须使用 new 生成实例');
    //     }
    // }
    // var person = new Person('张三'); // 正确


    class Shape {
        constructor() {
            if (new.target === Shape) {
                throw new Error('本类不能实例化');
            }
        }
    }

    class Rectangle extends Shape {
        constructor(length, width) {
            super();
            // ...
        }
    }

    var y = new Rectangle(3, 4);  // 正确





})();