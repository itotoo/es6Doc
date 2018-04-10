import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";

// rest参数的写法
function add(...values) {
    console.log(values);
}
add(2, 5, 3); // 10

const sortNumbers = (...numbers) => numbers.sort();
console.log(sortNumbers(2, 5, 3)); // 10