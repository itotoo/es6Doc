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
var {x:x , y = 5} = {x: 1};
