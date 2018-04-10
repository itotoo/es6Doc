import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";

// Object.setPrototypeOf()（写操作）、
// Object.getPrototypeOf()（读操作）、
// Object.create()（生成操作）代替。
let proto = {};
let obj = { x: 10 };
Object.setPrototypeOf(obj, proto);
proto.y = 20;
proto.z = 40;
console.log('setPrototypeOf',obj.x);

console.log(Object.getPrototypeOf(obj) === proto)