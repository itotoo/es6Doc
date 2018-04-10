import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";

// 对象所有自身属性（非继承属性）的描述对象。

const obj = {
    foo: 123,
    get bar() { return 'abc' }
};
let result = Object.getOwnPropertyDescriptors(obj);
console.log(result);
// 主要是为了解决Object.assign()无法正确拷贝get属性和set属性的问题。
const source = {
    set foo(value) {
        console.log(value);
    }
};
const target2 = {};
Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
// 继承
// 以前，继承另一个对象，常常写成下面这样。

let proto = {};
let obj2 = { 
    __proto__: proto,
    x: 10
};
proto.y = 20;
proto.z = 40;
console.log('__proto__',obj2.x,obj2.y);

const obj3 = Object.create(
    {},
    Object.getOwnPropertyDescriptors({
        foo: 123,
    })
);