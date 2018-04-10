// 模式与变量

// 取值
let { foo: baz } = { foo: "aaa", bar: "bbb" };
console.log(baz )

let obj = {
    p: [
      'Hello',
      { y: 'World' }
    ]
  };
  
  let { p , p: [x, { y }] } = obj;
  console.log(p, x, y)

// 赋值
let xxx;
({xxx = 5 } = {xxx: 1});

// 对象的方法，赋值
let { log, sin, cos } = Math;

// 数组进行对象属性的解构
let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr;
first // 1
