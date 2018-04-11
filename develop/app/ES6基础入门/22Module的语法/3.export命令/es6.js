import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";

// import 命令 用于输入其他模块提供的功能。
// export 命令 用于规定模块的对外接口
// export 命令 要使用as关键字，将输入的变量重命名。
// export 只能输出单个变量
// 模块文件内部的所有变量，外部无法获取

import {firstName, lastName, year, streamLatestVersion} from './module/md1';
console.log(firstName);
console.log(lastName);
console.log(year);
console.log(streamLatestVersion(10,10));

