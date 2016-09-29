/**
 * Created by zjjfly on 2016/9/28.
 */
require("babel-polyfill");
(function () {
    "use strict";
    const book = [
        "Twinkle, twinkle, little bat!",
        "How I wonder what you're at!",
        "Up above the world you fly,",
        "Like a tea tray in the sky.",
        "Twinkle, twinkle, little bat!",
        "How I wonder what you're at!",
    ];
    const it = book.values();
    let current = it.next();
    while (!current.done) {
        console.log(current.value);
        current = it.next();
    }
    //每次产生一个新的迭代器，都是从头开始

    //iterator protocol 使得任意对象都可以被迭代
    //iterator protocol 说的是，如果你的类提供了一个Symbol.iterator方法
    //这个方法返回一个有迭代器行为(有next方法,返回一个带value和done属性的对象)的对象，那么这个类就变成可迭代的了
    class Log {
        constructor() {
            this.messages = [];
        }

        add(message) {
            this.messages.push({message, timestamp: Date.now()});
        }

        [Symbol.iterator]() {
            return this.messages.values();
        }
    }
    const log = new Log();
    log.add("first day at sea");
    log.add("spotted whale");
    log.add("spotted another vessel");
    for (let entry of log) {
        console.log(`${entry.message} @ ${entry.timestamp}`);
    }
    // 上面的代码直接返回Array对象的values方法的值，下面我们自定义一个带next方法的对象
    class Logs{
        constructor() {
            this.messages = [];
        }

        add(message) {
            this.messages.push({message, timestamp: Date.now()});
        }
        [Symbol.iterator]() {
            let i=0;
            const messages=this.messages;
            return {
                next(){
                    if(i>=messages.length){
                        return {value:undefined,done:true};
                    }else {
                        return {value:messages[i++],done:false};
                    }
                }
            };
        }
    }

    const logs = new Logs();
    logs.add("jjzi");
    logs.add("zjj");
    logs.add("z");
    for (let entry of logs) {
        console.log(`${entry.message} @ ${entry.timestamp}`);
    }
    //iterator也可以用于展示那些有无穷的值的对象，例如斐波那契数列
    class FibonacciSequence{
        [Symbol.iterator](){
            let previous=0;
            let i=1;
            return{
                next(){
                    let re=i+previous;
                    previous=i;
                    i=re;
                    return {value:re,done:false};
                }
            };
        }
    }
    const fibonacciSequence = new FibonacciSequence();
    let n=0;
    //输出斐波拉契数列的前100个值
    for (let obj of fibonacciSequence) {
        console.log(obj);
        n++;
        if(n>100){
            break;
        }
    }
})();