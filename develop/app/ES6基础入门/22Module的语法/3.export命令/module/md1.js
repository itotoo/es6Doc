// // 正确
// 写法一
// export var m = 1;
// // 写法二
// var m = 1;
// export {m};
// // 写法三
// var n = 1;
// export {n as m};


// // 正确
// export function f() {};
// // 正确
// function f() {}
// export {f};


var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
function multiply(x, y) {
    return x * y;
};

export {
    firstName, 
    lastName,
    year,
    multiply as streamLatestVersion
}; 