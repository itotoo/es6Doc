import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";
console.log(
    [1,2,3,4].find( n => n >2)
);


[1,2,3,4].find( (value, index, arr)=> 
    console.log(value, index, arr)
)

console.log(
    [1,2,3,4].findIndex( n => n >2)
);