import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";

// import 命令 用于输入其他模块提供的功能。
// 必须与被导入模块对外接口的名称相同
// import命令要使用as关键字，将输入的变量重命名。
// import命令具有提升效果
// import是静态执行

import './module/md2';
import {firstName as A , lastName as B , year as C} from './module/md1';
console.log(A);
console.log(B);
console.log(C);

