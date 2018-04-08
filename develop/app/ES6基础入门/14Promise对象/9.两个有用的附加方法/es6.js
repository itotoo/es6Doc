import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

// Promise.resolve()
Promise.prototype.done = function (onFulfilled, onRejected) {
  this.then(onFulfilled, onRejected)
    .catch(function (reason) {
      // 抛出一个全局错误
      setTimeout(() => {  console.log(reason) }, 0);
    });
};

Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};
(()=>{
    let thenable = {
        then: function(resolve, reject) {
            resolve(42);
        }
    };

    Promise.reject(thenable)
    .catch(function(value) {
        console.log(value);  // 42
    })
    .finally(()=>{
        console.log("stop")
    })
    .done()


})();



