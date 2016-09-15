/**
 * Created by zjjfly on 16/9/15.
 */
"use strict";
//es6新特性 解构
//对象解构，变量名必须和对象中属性的名字匹配
const obj={b:2,c:3,d:4};
const {a,b,c}=obj;
console.log(a, b, c);//undefined 2 3 因为obj中没有a这个属性，所以是undefined
let d,e,f;
({d,e,f} = obj);//上面的解构是声明和赋值在一行上了，这个是声明和赋值分离了，要在外面加一对圆括号
console.log(d, e, f);

//数组解构，变量名随意
const arr=[1,2,3,4,5];
let [x,y]=arr;//捕获前两个元素
console.log(x, y);
//可以通过...捕获剩下的元素并把他们放入一个新的数组，类似clojure的&
let [n,m,...rest]=arr;
console.log(n, m);
console.log(rest);
//利用解构，可以实现方便的交换变量的值，以前实现这个需要用一个临时变量
let i=5,j=10;
[i,j]=[j,i];
console.log(i, j);



