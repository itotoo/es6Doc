import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";

// 使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载
// 为了给用户提供方便,为模块指定默认输出。

// export default命令
// 这时import命令后面，不使用大括号。

import * as A  from './module/md1';
import * as B  from './module/md2';

console.log(A)
console.log(B)






