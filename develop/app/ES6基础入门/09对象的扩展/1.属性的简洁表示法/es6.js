import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";

// 简写
// 简洁写法的属性名总是字符串
{foo} 
{foo: foo}
const o = {
  method(){}
};
