/**
 * Created by zjjfly on 2016/9/29.
 * IIFE:immediately invoked function expressions 立即执行函数表达式
 */
'use strict';
var i;
for (i = 5; i >= 0; i--) {
    setTimeout(function () {
        console.log(i === 0 ? 'go!' : i);
    }, (5 - i) * 1000);
}
//和设想的不一样,输出的是六个-1
//使用块级作用域可以解决这个问题
for (let i = 5; i >= 0; i--) {
    setTimeout(function () {
        console.log(i === 0 ? 'go!' : i);
    }, (5 - i) * 1000);
}
//还可以使用函数
function loopBody(i) {
    setTimeout(function () {
        console.log(i === 0 ? 'go!' : i);
    }, (5 - i) * 1000);
}
var j;
for (j = 5; j > 0; j--) {
    loopBody(j);
}
//还可以用IIFE
var n;
for (n = 5; n > 0; n--) {
    (function (i) {
        setTimeout(function () {
            console.log(i === 0 ? 'go!' : i);
        }, (5 - i) * 1000);
    })(n);
}
//实际上，这种方法就是把上面的loopBody函数换成了一个匿名函数
