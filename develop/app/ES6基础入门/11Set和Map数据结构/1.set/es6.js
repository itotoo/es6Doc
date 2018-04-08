import babelPolyfill from "babel-polyfill";
import es6Promise from "es6-promise";
import shim from "es5-shim";
import fetchDetector from "fetch-detector";
import fetchIe8 from "fetch-ie8";

// set 有去掉重复值的功能
(()=>{
    const set = new Set([1,2,3,4,4]);
    set.add('ok1');
    set.add('ok2');
    console.log([...set]);
    set.delete('ok1');
    console.log([...set]);
    console.log("有没有这个值",set.has('ok2'));
    set.clear();
    console.log(set);
    console.log(set instanceof Array );
})();

// 遍历操作

(()=>{
    let set = new Set(['red', 'green', 'blue']);
    for (let item of set.keys()) {
        console.log(item);
    }
    // red
    // green
    // blue

    for (let item of set.values()) {
        console.log(item);
    }
    // red
    // green
    // blue

    for (let item of set.entries()) {
        console.log(item);
    }

    let set2 = new Set([1, 2, 3]);
    set2.forEach((value, key) => console.log(value * 2) );
    console.log(set2)

})();

(()=>{
    let arr = [3, 5, 2, 2, 5, 5];
    console.log(
        [...new Set(arr)]
    )
})();
(()=>{
    // map
    let arr = [3, 5, 2, 2, 5, 5];
    console.log(
        arr = [...new Set(arr)].map( x => x+'0000')
    );
    console.log('map',arr)
})();
(()=>{
    // filter
    let arr = [3, 5, 2, 2, 5, 5];
    console.log(
        [...new Set(arr)].filter(x => x%2 !== 0)
    )
})();

(()=>{
    let a = new Set([1, 2, 3]);
    let b = new Set([4, 3, 2]);
    // 并集
    console.log(
        '并集',
        new Set([...a,...b])
    );
    // 交集
    console.log(
        '交集',
        new Set( [...a].filter(x => b.has(x)))
    );
    // 差集
    console.log(
        '差集',
        new Set( [...a].filter(x => !b.has(x)))
    );
})();