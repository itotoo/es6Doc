import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";


// 尾调用（Tail Call）是函数式编程的一个重要概念

// 就是指某个函数的最后一步是返回调用另一个函数,而不是自身

// 我们知道，函数调用会在内存形成一个“调用记录”，又称“调用帧”（call frame），形成一个“调用栈”

// 直接用内层函数的调用帧，取代外层函数的调用帧就可以了。

// 调用帧只有一项，这将大大节省内存，这就是“尾调用优化”的意义。

// ES6 的尾调用优化只在严格模式下开启
'use strict';

// 1.进行“尾调用优化”，只有不再用到外层函数的内部变量 ---------------------------
function addOne(a){
    var one = 1;
    function inner(b){
      return b + one;
    }
    return inner(a);
}

// 2.函数调用自身，称为递归。如果尾调用自身，就称为尾递归。 ---------------------------
function Fibonacci (n , val = 1) {
    if( n <= 1 ) {return val };
    return Fibonacci (n - 1,n + val);
}
// 1+2+3+4+5+6+7+...+100
console.log(Fibonacci(1000)) //  Maximum call stack size exceeded


// 函数式编程有一个概念，叫做柯里化（currying），意思是将多参数的函数转换成单参数的形式。这里也可以使用柯里化。

// ......

// 尾递归优化的实现


  
;(function (params) {
    function tco(f) {
    var value;
    var active = false;
    var accumulated = [];

    return function accumulator() {
        accumulated.push(arguments);
        if (!active) {
        active = true;
        while (accumulated.length) {
            value = f.apply(this, accumulated.shift());
        }
        active = false;
        return value;
        }
    };
    }

    var sum = tco(function(x, y) {
    if (y > 0) {
        return sum(x + 1, y - 1)
    }
    else {
        return x
    }
    });

    console.log(sum(1, 1000000000));
})();




