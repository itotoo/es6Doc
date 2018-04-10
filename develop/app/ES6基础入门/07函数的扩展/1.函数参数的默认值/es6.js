import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
// 函数参数的默认值
// 1.基本用法,参数指定默认值 --------------------------------
function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}
console.log(new Point());

// 2.与解构赋值默认值结合使用 --------------------------------
// 写法一
function m1({x = 0, y = 0} = {}) {
    return [x, y];
}
// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}

// 3.参数默认值的位置 --------------------------------
function foo2(x = 5, y = 6, z) {
    console.log(x, y);
}
foo2(undefined, null)
foo2(undefined)


// 4.函数的 length 属性 --------------------------------
var numbers = (function (a, b = 5, c) {}).length // 2
console.log(`函数的 length ${numbers}`);

// 5.作用域 --------------------------------
(function(){
    // 实际执行的是let x
    var x = 1;
    function f(x, y = x) {
      console.log(x);
      console.log(y);
    }
    f(2) // 2
    // *******************
    var x = 1;
    function foo(x, y = function() { x = 2; }) {
        var x = 3;
        y();
        console.log(x);
    }
    foo() // 3
    x // 1
})()

