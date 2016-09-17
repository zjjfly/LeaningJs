/**
 * Created by zjjfly on 16/9/16.
 */
"use strict";
function f(o) {
    o.message = "set in f";
    o = {
        message: "new object"
    };
    console.log(`inside f:o.message="${o.message}" (after assignment)`);
}
let o = {
    message: "initial value"
};
console.log(`before calling f:o.message="${o.message}"`);
f(o);
console.log(`after calling f:o.message="${o.message}"`);
//在函数中的o重新赋值为另一个对象，函数外的o不会改变，所以输出如下：
//before calling f:o.message="initial value"
//inside f:o.message="new object" (after assignment)
//after calling f:o.message="set in f"

//js中,可以使用任意多的参数调用任何函数，如果传入函数的参数比函数定义的少，缺的参数在函数中就成了undefined、
function fn(x) {
    return `in f:x=${x}`;
}
console.log(fn());//in f:x=undefined

//函数参数直接解构对象，属性名一定要和对象里的一直,不一样的属性的值是undefined
function getSentenceFromObj({subject, verb, object}) {
    return `${subject} ${verb} ${object}`;
}
const obj = {
    subject: "I",
    verb: "love",
    object: "JS"
};
console.log(getSentenceFromObj(obj));
//函数参数直接解构数组
function getSentenceFromArray([subject, verb, object]) {
    return `${subject} ${verb} ${object}`;
}
const arr = ["I", "love", "JS"];
console.log(getSentenceFromArray(arr));
//和给变量赋值一样，可以用...收集剩下的参数，放入一个数组
function addPrefix(prefix, ...words) {
    const prefixWords = words.map(s=>prefix + s);
    return prefixWords;
}
console.log(addPrefix("con", "verse", "vex"));

//es6新特性:默认参数，这个特性as也有
function fx(a, b = "default",c=3) {
    return `${a}-${b}-${c}`;
}
console.log(fx(1));



