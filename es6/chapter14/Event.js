/**
 * Created by zjjfly on 2016/9/30.
 */
"use strict";
//Node有内置的对event机制，但需要和类一起使用
const EventEmitter = require("events").EventEmitter;
class CountDown extends EventEmitter {
    constructor(seconds, superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }

    go() {
        const countdown = this;
        return new Promise(function (resolve, reject) {
            for (let i = countdown.seconds; i >= 0; i--) {
                setTimeout(function () {
                    if (countdown.superstitious && i === 13)
                        return reject(new Error("DEFINITELY NOT COUNTING THAT"));
                    countdown.emit("tick", i);//广播tick事件
                    if (i === 0) resolve();
                }, (countdown.seconds - i) * 1000);
            }
        });
    }
}
const c = new CountDown(14, true);
c.on("tick", function (i) {//监听tick事件
    if (i > 0) console.log(i + "...");
});
c.go()
    .then(function () {
        console.log("Go!");
    })
    .catch(function (err) {
        console.error(err.message);
    });
//上面的代码解决了无法报告进度的问题，而且也有一个Promise处理成功或者失败的情况
//但还是没有解决产生了reject后仍然运行的问题,解决方法是把setTimeout产生的id存起来，如果发生了reject,调用clearTimeout终止那些timeout
class SuperCountdown extends EventEmitter {
    constructor(seconds, superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }

    go() {
        const countdown = this;
        const timeoutIds = [];
        return new Promise(function (resolve, reject) {
            for (let i = countdown.seconds; i >= 0; i--) {
                timeoutIds.push(setTimeout(function () {
                    if (countdown.superstitious && i === 13) {
                        // clear all pending timeouts
                        timeoutIds.forEach(clearTimeout);
                        return reject(new Error("DEFINITELY NOT COUNTING THAT"));
                    }
                    countdown.emit("tick", i);
                    if (i === 0) resolve();
                }, (countdown.seconds - i) * 1000));
            }
        });
    }
}
const sc = new SuperCountdown(14, true);
sc.on("tick", function (i) {//监听tick事件
    if (i > 0) console.log(i + "...");
});
sc.go()
    .then(function () {
        console.log("Go!");
    })
    .catch(function (err) {
        console.error(err.message);
    });
//Promise可以链起来
function launch() {
    return new Promise(function (resolve) {
        if (Math.random() < 0.3) return; // rocket failure console.log("Lift off!");
        setTimeout(function () {
            resolve("In orbit!");
        }, 2 * 1000); // a very fast rocket indeed
    });
}
//如果在链中的某个Promis生产了一个错误,整个链会停止并且调用错误处理,剩余的Promise不会执行
const cc = new SuperCountdown(15, true)
    .on("tick", i=>console.log(i + "..."));
cc.go()
    .then(launch)
    .then(msg=>console.log(msg))
    .catch((err)=>console.error(`${err.message}`));

//Promise的一个问题是，无法保证Promise会被处理，如果忘了调用resolve或reject
//解决方法是加上一个超时时间
function addTimeout(fn, timeout) {
    if (timeout === undefined) timeout = 1000;
    return function (...args) {
        return new Promise(function (resolve, reject) {
            const tid = setTimeout(reject, timeout,
                new Error("promise timed out"));
            fn(...args)
                .then(function (...args) {
                    clearTimeout(tid);
                    resolve(...args);
                })
                .catch(function (...args) {
                    clearTimeout(tid);
                    reject(...args);
                });
        });
    };
}
const ccc = new SuperCountdown(3)
    .on("tick", i=>console.log(i + "..."));
ccc.go()
    .then(addTimeout(launch, 4 * 1000))
    .then(function (msg) {
        console.log(msg);
    })
    .catch(function (err) {
        console.error("Houston, we have a problem: " + err.message);
    });

