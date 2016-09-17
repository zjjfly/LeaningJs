/**
 * Created by zjjfly on 16/9/17.
 */
"use strict";
//用函数表达式声明一个函数
const f = function () {
    console.log("heh");
};
f();
//函数表达式也可以有函数名，这个是可选的，但当这个函数是递归函数时,这个名字会有用
const g = function fx(stop) {
    if (stop) {
        console.log("f stop");
    } else {
        fx(true);
    }
};
g(false);

//es6新特性:箭头函数
const f1 = function () {
    return "hello!";
};
//下面的箭头函数等价于上面的函数
const f11 = ()=>"hello!";
console.log(f1());
console.log(f11());
const f2 = function (name) {
    return `Hello, ${name}!`;
};
//下面的箭头函数等价于上面的函数
const f22 = name => `Hello, ${name}!`;
console.log(f2("jjzi"));
console.log(f22("jjzi"));
const f3 = function (a, b) {
    return a + b;
};
//下面的箭头函数等价于上面的函数
const f33 = (a, b)=>a + b;
console.log(f3(1, 2));
console.log(f33(1, 2));

