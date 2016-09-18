/**
 * Created by zjjfly on 16/9/17.
 */
"use strict";
//IIFE,立即调用函数
(function () {
    console.log("hehe");
})();
//这种函数的好处是，它里面的变量有自己的作用域，并且因为是函数，可以传递一些东西到外部
const message = (function () {
    const secret = "I'm a secret!";
    return `The secret is ${secret.length} characters long.`;
})();
console.log(message);
//这个特性可以用来计算函数被调用的次数
const f=(function () {
    let count=0;
    return function () {
        return `I have been called ${++count} time(s).`;
    };
})();
console.log(f());
console.log(f());