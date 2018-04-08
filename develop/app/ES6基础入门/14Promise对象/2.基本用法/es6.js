import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

const polyfill = require('babel-polyfill');

// 语法
// const promise = new Promise(function(resolve, reject) {
//     // ... some code
// }).then(resolve).then(resolve).catch(reject).finally();


// 栗子
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject();
            return resolve();

        },5000)
    });
    promise.then((value) => {
        console.log("value:",value);
    },(error) => {
        console.log("error:",error);
    });

    console.log('Hi!');



// all 用法
(()=>{
    let fun1= ()=>{
        let p = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log('1秒后继续执行');
                resolve(1);
            },10000);
        });
        return p;
    };
    let fun2= ()=>{
        let p = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(2);
            },500);
        });
        return p;
    };
    let fun3= ()=>{
        let p = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log('2秒后继续执行');
                resolve(3);
            },2000);
        });
        return p;
    };

    Promise.all([fun3(),fun1(),fun2()])
    .then((data)=>{
        console.log("all------->",data)
    })

    Promise.race([fun3(),fun1(),fun2()])
    .then((results)=>{
        console.log("race------->",results);
    });

})();


