import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";
// 基本用法 § ⇧
(function (params) {
    function log(x, y = "world"){
        console.log(x,y)
    }
    log('Hello') // Hello World
    log('Hello', 'China') // Hello China
    log('Hello', '') // Hello

    let x = 99;
    function foo(p = x + 1) {
    console.log(p);
    }
    foo() // 100
    x = 1000;
    foo() // 101
})();


// 与解构赋值默认值结合使用 § ⇧
(function (params) {
    function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
    console.log(method);
    }

    fetch('http://example.com')
})();



// 参数默认值的位置 § ⇧
(function (params) {
    function foo2(x = 5, y = 6) {
        console.log(x, y);
    }
    foo2(undefined, null)
    foo2(undefined)
})();


// 函数的 length 属性 § ⇧
(function(){
    let  number = (function (a, b = 1, c) {}).length // 1
    console.log('number',number)
})();

// 作用域 § ⇧
(function(){
    var x = 1;
    function f(x, y = x) {
        console.log(x,y);
    }
    f(2) // 2
})()

