import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(()=>{
    let fun = ()=>{
        let p =new Promise((resolve,reject)=>{
            // ajax
            setTimeout(function(){
                var num = Math.ceil(Math.random()*10); //生成1-10的随机数
                if(num<=5){
                    resolve(num);
                }
                else{
                    reject('数字太大了');
                }
            }, 500);
        });
        return p;
    }
    let runAsync2 = ()=>{
        let p = new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve('随便什么数据2');
            }, 2000);
        });
        return p;            
    }

    fun()
    .then((data)=>{
        console.log(" 成功 ",data);
        return runAsync2();
    },(data)=>{
    })
    .then((data)=>{
        console.log(" 成功 ",data);
    },(data)=>{
    })
    .catch(function(reason){
        console.log(reason);
    });



})();


