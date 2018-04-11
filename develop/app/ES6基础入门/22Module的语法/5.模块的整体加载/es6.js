import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";

// 
import * as circle  from './module/md1';
circle.foo = 'hello';
console.log('圆面积：' + circle.foo);
console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));






