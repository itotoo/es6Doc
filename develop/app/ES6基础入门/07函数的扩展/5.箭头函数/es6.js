import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

var f = () => "hello world";

var f2 = (a,b = 5 , {c = 0} = {}) => {
    return a +b;
}

var f3 = ({a,b,c}) => ({
    a:a,
    b:b,
    c:c
})