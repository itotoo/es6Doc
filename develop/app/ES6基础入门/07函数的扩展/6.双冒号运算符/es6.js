// foo::bar(...arguments);
import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";


// foo::bar(...arguments);
// // 等同于
// bar.apply(foo, arguments);