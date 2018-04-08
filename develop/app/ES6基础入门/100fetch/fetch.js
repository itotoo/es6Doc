

import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";




let request = (url,loadCallBack,callBackSuccess,callBackError) => {

    //请求发送中回调,可以加一些loading效果
    loadCallBack();

    fetch(url,{
        method:'GET',//如果为GET方式，则不要添加body，否则会出错    GET/POST
        header:{//请求头
        },
        // body:parames//请求参数
    })
        .then((response) => response.json())//将数据转成json,也可以转成 response.text、response.html
        .then((responseJson) => {//获取转化后的数据responseJson、responseText、responseHtml
            /*return responseJson.movies; */
            //成功回调
            callBackSuccess(JSON.stringify(responseJson));//JSON.stringify()避免出现烦人的[object object]

        }).catch((error) => {
            //失败回调
            callBackError(error);
    });
}

request(
    'data/data.json',
    ()=>{
        console.log('请求发送中...')
    },
    (responseData)=>{
        console.log('*-*-*-*-',responseData);
    },
    (error)=>{
        console.log('+-+-+-+-',error);
    }
)

