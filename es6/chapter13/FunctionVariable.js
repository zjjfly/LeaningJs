/**
 * Created by zjjfly on 2016/9/29.
 */
"use strict";
//函数做参数
function sum(arr, f) {
    //处理传入的f不是函数的情况
    if (typeof f != "function") f = x => x;
    return arr.reduce((a, x) => a += f(x), 0);
}
console.log(sum([1,2,3]));
console.log(sum([1,2,3],x=>x*x));
console.log(sum([1,2,3],x=>Math.pow(x,3)));

//函数做返回值
function sumOfSquare(arr) {
    return sum(arr,x=>x*x);
}
console.log(sumOfSquare([2,3,4]));
//更通用的写法
function newSummer(f) {
    return arr=>sum(arr,f);//这种把含有多个参数的函数转成只有一个参数的函数的方法叫做currying
}
const sumOfSquares=newSummer(x=>x*x);
console.log(sumOfSquares([1,2,3,4]));
const sumOfCubes=newSummer(x=>Math.pow(x,3));
console.log(sumOfCubes([1,2,3]));