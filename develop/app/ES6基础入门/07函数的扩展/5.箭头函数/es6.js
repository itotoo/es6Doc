import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";

// 1. 传参return
let f = v => v;

// 多个参数
var sum = (num1, num2) => num1 + num2;

// 使用大括号 , 括号
var sum = (num1, num2) => { return num1 + num2; }
let getTempItem = id => ({ id: id, name: "Temp" });
console.log(getTempItem(100))

// 解构
const full = ({ first, last }) => first + ' ' + last;

// 箭头函数有几个使用注意点。
// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
// （4）不可以使用yield命令
// （5）箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向。