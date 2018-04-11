import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";

//  动态加载,有一个提案，建议引入import()函数，完成动态加载。
// import()类似于 Node 的require方法
// import 前者是异步加载，import()后者是同步加载。

// 提案中
// import('./module/md2').then(({export1, export2}) => {
//     // ...·
// });
// import('./module/md1').then(({export1, export2}) => {
//     // ...·
// });





