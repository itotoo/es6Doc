import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

(()=>{
    function makeIterator(array) {
        var nextIndex = 0;
        return {
            next: function() {
                console.log(nextIndex);
                return nextIndex < array.length ?
                    {value: array[nextIndex++], done: false} :
                    {value: undefined, done: true};
            }
        };
    }

    var it = makeIterator(['a', 'b']);

    console.log( it.next() ) ; // { value: "a", done: false }
    console.log( it.next() ) ;// { value: "b", done: false }
    console.log( it.next() ) ;// { value: undefined, done: true }
    console.log( it.next() ) ;// { value: undefined, done: true }


})();
