// 传值 赋值 解构
function move({x,y} = { y: 0}) {
    return [x, y];
}
  
console.log(move({x: 3})); // [3, 8]