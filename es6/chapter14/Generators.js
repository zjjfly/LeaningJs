/**
 * Created by zjjfly on 2016/9/30.
 */
"use strict";
const fs = require("fs");
//generator和Promise结合，可以提供一个很强大的控制异步代码的技术
//它可以让我写出更易于理解的异步代码
//以之前说过的读三个文件，等待一分钟后把三个文件的内容写入第四个文件

//下面这个方法是把node的error-first形式的callback变换成Promise
function nfcall(f, ...args) {
    return new Promise(function (resolve, reject) {
        f.call(null, ...args, function (err, ...args) {
            if (err) return reject(err);
            resolve(args.length < 2 ? args[0] : args);
        });
    });
}
//一个生产用于延缓时间的Promise的函数
function ptimeout(delay) {
    return new Promise(function (resolve) {
        setTimeout(resolve, delay);
    });
}
//一个generator的runner，一般不用自己写，推荐tj的co
function grun(g) {
    const it = g();
    (function iterate(val) {
        const x = it.next(val);
        if (!x.done) {
            if (x.value instanceof Promise) {
                x.value.then(iterate).catch(err=>it.throw(err));
            }else {
                setTimeout(iterate, 0);
            }
        }
    })();
}
//generator
// function* theFutureIsNow() {
//     try {
//         const dataA = yield nfcall(fs.readFile, "a.txt");
//         const dataB = yield nfcall(fs.readFile, "b.txt");
//         const dataC = yield nfcall(fs.readFile, "c.txt");
//         yield ptimeout(5 * 1000);
//         nfcall(fs.writeFile, "d.txt", dataA + dataB + dataC);
//     } catch (err) {
//         console.error(err.message);
//     }
// }
//generator中可以捕获Promise抛出的异常
//Promise.all方法可以放入多个Promise,并且把每个Promise的成功的结果返回放入一个数组
function* theFutureIsNow() {
    let data;
    try {
        data = yield Promise.all([
            nfcall(fs.readFile, "a.txt"),
            nfcall(fs.readFile, "b.txt"),
            nfcall(fs.readFile, "c.txt"),
        ]);
    } catch (err) {
        console.error("Unable to read one or more input files: " + err.message);
        throw err;
    }
    yield ptimeout(5 * 1000);
    try {
        yield nfcall(fs.writeFile, "d.txt", data[0] + data[1] + data[2]);
    } catch (err) {
        console.error("Unable to write output file: " + err.message);
        throw err;
    }
}
grun(theFutureIsNow);