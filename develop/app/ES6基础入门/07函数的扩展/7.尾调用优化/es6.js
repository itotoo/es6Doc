import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";


let f = () => {
  let m = 1;
  let n = 2;
  return g(m + n);
}
let g = (...value) => {
    console.log(value) 
};
f();

(function (params) {
    let factorial = (n, total = 1) =>{
        if (n === 1) return total;
        return factorial(n - 1, n * total);
    }
    factorial(5) // 120
})();


(function (params) {
    // function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
    // if( n <= 1 ) {return ac2};

    // return Fibonacci2 (n - 1, ac2, ac1 + ac2);
    // }

    // var a = Fibonacci2(1475) // 573147844013817200000
    // // var b = Fibonacci2(1000) // 7.0330367711422765e+208
    // // var c = Fibonacci2(10000) // Infinity

    // console.log(a);
    // console.log(b);
    // console.log(c);



})();

(function (params) {
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

    console.log(sum(1, 100000000));
})();




