import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(()=>{
    var shapeType = {
        triangle: Symbol()
    };
    function getArea(shape, options) {
        var area = 0;

        switch (shape) {
            case shapeType.triangle: // 魔术字符串
            area = .5 * options.width * options.height;
            break;
            /* ... more code ... */
        }

        return area;
    }


    let str = getArea(shapeType.triangle, { width: 100, height: 100 }); // 魔术字符串
    console.log(str);

})();