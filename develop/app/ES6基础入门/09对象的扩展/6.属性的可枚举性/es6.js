import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";


// Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象
(()=>{
    let obj = { foo: 123 };
    let objs = Object.getOwnPropertyDescriptor(obj, 'foo');
    //  {
    //    value: 123,
    //    writable: true,
    //    enumerable: true,
    //    configurable: true
    //  }
})();
// ES6 一共有 5 种方法可以遍历对象的属性。

// 目前，有四个操作会过滤掉 enumerable为false的属性。
    // 可枚举的属性
    // for...in：包含继承的。
    // Object.keys()：不含继承的。
    // JSON.stringify()：只串行化对象自身的可枚举的属性。
    // Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举


// 父类
// 动物集合
function Animal(){
    this.name = "动物";
}
Animal.prototype = {
    species: "动物",
    getName: function(){
        console.log(this.name);
    }
};
// 子类
// 实例猫
function Cat(name, color){
    this.name  = name;
    this.color = color;
}
// 继承动物原型
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;
// 怎么定义继承和自身prototype？？？
// Cat.prototype = { 
//     foo: 123 , b:0, 10:0, 2:0, a:0 ,
//     [Symbol('ok')]:0
// };
var obj = new Cat("大毛","黄色");
Object.defineProperty(obj, 'invisible', {
    value: 'hello',
    enumerable: false,
})
alert(obj.species); // 动物
// 大多数时候，我们只关心对象自身的属性
// 1.
for(let i in obj){
    console.log(i)
}
// 2.自身,
console.log(Object.keys(obj))
// 3.自身,包括不可枚举属性，不含 Symbol 属性
console.log(Object.getOwnPropertyNames(obj))
// 4.自身,只返回所有 Symbol 属性
console.log(Object.getOwnPropertySymbols(obj))
// 5.自身
console.log(Reflect.ownKeys(obj))


