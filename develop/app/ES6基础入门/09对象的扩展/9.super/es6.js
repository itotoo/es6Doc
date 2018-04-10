import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";


// super，指向当前对象的原型对象
// 能用在对象的方法之中
const proto = {
    foo: 'hello'
};
  
const obj = {
    foo: 'world',
    find() {
        return super.foo;
    }
};
  
Object.setPrototypeOf(obj, proto);
obj.find() // "hello"