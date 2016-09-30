/**
 * Created by zjjfly on 2016/9/29.
 */
"use strict";
//Promise避免了callback的一些缺点。它可以保证,回调函数要么执行成功,要么执行失败，而且这两个结果只会发生一次
//另一个有点,它是对象,可以到处传递,而不用像回调地狱那样不断嵌套。

//生成Promise
function countdown(seconds) {
    return new Promise(function (resolve, reject) {
        for (let i = seconds; i >= 0; i--) {
            setTimeout(function () {
                if (i === 13) return reject(new Error("DEFINITELY NOT COUNTING THAT"));
                if (i > 0) console.log(i + "...");
                else resolve(console.log("GO!"));
            }, (seconds - i) * 1000);
        }
    });
}
//使用Promise,要传入两个函数,一个在它成功时调用，一个在它失败时调用
countdown(5).then(
    function () {
        console.log("countdown completed successfully");
    },
    function (err) {
        console.error(`countdown experienced an error:${err.message}`);
    }
);
// 也可以把两个函数分开来传入
const p = countdown(14);
p.then(function () {
    console.log("countdown completed successfully");
});
p.catch(function (err) {
    console.error(`countdown experienced an error:${err.message}`);
});
//会发现，Promise产生了一个reject后，仍然继续执行。而且它没有提供一个报告进度的方法，这是它的缺点
