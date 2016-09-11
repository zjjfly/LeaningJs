/**
 * Created by zjjfly on 16/9/11.
 */
"use strict";
//字符串在js中可以使用成对的单引号或双引号括起来
//双引号里可以任意使用单引号，反之亦然
console.log("Don't do that!");
// console.log('Sam looked up, and said "hello, old friend!", as Max walked in.');
//但是如果想要都使用，需要转义字符
const dialog="Sam looked up and said \"don't do that!\" to Max.";
console.log(dialog);
//转义符可以表示一些无法被打印出来的字符，如换行符制表符
//\u表示Unicode字符
console.log("De Morgan’s law: \u2310(P \u22c0 Q) \u21D4 (\u2310P) \u22c1 (\u2310Q)");
//\x表示latin-1的字符，它是unicode的子集，所以也可以使用\u表示
console.log("\xc9p\xe9e is fun,but foil is more fun.");

//es6的新特性：template string
// 原来在字符串中插入表达式需要用+号拼接
console.log("dialog:"+dialog);
// 现在可以使用类似groovy中的模板字符串
let currentTemp=19.6;
const message=`The current temperature is ${currentTemp}\u00b0c`;
console.log(message);

//跨行的string字面量
let multiline="line1\
    line2";
// 没有实现跨行
console.log(multiline);
//实现跨行了，但会带着缩进的空格
multiline=`line1
    line2`;
console.log(multiline);

//数字作为字符串，会引发一些问题,
console.log(3 + "20");//320
console.log(3*"20");//60
// 所以应该避免这样使用，在要使用数字的时候使用数字，要用字符串的时候使用字符串，字符串不要直接当数字来用，要经过类型转换。