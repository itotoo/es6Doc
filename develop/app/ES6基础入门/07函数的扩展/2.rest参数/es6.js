import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";
(function (params) {
    function add() {
        console.log(arguments)
        let sum = 0;

    for (var val of arguments) {
        sum += val;
    }

    return sum;
    }

    console.log(add(2, 5, 3)) // 10


    function push(array, ...items) {
        items.forEach(function(item) {
            array.push(item);
            console.log(item);
        });
    }

    var a = [];
    push(a, 1, 2, 3)
})();