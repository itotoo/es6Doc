import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";


// 函数的name属性，返回函数名
// -------------------------------------------
var f = function () {};
// ES5
f.name // ""
// ES6
f.name // "f"
// -------------------------------------------
const bar = function baz() {};
// ES5
bar.name // "baz"
// ES6
bar.name // "baz"

// -------------------------------------------
(new Function).name // "anonymous"

// -------------------------------------------
function foo() {};
foo.bind({}).name // "bound foo"
(function(){}).bind({}).name // "bound "
