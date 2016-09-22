/**
 * Created by zjjfly on 16/9/18.
 */
"use strict";

//在开头和末尾添加删除元素
//push和pop分别是添加和删除数组的末尾的元素,shift和unshift分别是删除和添加起始元素
const arr = [1, 2, 3];
console.log(arr.push(0));//push返回数组的新的长度
console.log(arr.pop());//pop返回删除的元素
console.log(arr.unshift(0));//unshift返回数组的新的长度
console.log(arr.shift());//shift返回删除的元素

//在末尾加多个值
//concat方法返回一个新的数组。
//如果传入的参数是一个数组那么这个数组中会分解成为各个元素放入调用方法的数组
console.log(arr.concat(4, 5, 6));
console.log(arr.concat([4, 5, 6]));
console.log(arr.concat([4, 5], 6));
console.log(arr.concat([4, [5, 6]]));
arr.push(4);
arr.push(5);

//获取子数组,使用slice函数,slice的参数可以是负数，-1表示最后一个元素
console.log(arr.slice(3));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice(-2, -1));

//在任意位置添加和删除元素,使用splice,这个函数的返回值是一个删除的元素组成的数组
const a = [1, 5, 7];
a.splice(1, 0, 2, 3, 4);
console.log(a);
a.splice(5, 0, 6);
console.log(a);
a.splice(1, 2);
console.log(a);
a.splice(2, 1, "a", "b");
console.log(a);
a.splice(-1, 0, "c");//也可以使用负数做参数
console.log(a);

//es6新方法，copyWithin，作用是把数组的部分内容复制到其他位置，这个操作会覆盖原来位置的数据
//第一个参数是目标位置;第二个参数是复制的元素的起始位置;第三个参数是复制元素的结束位置,参数是可选的
console.log(arr);
arr.copyWithin(1, 2);
console.log(arr);
arr.copyWithin(2, 0, 2);
console.log(arr);
arr.copyWithin(0, -4, -2);//也可以使用负数做参数
console.log(arr);

//es6新方法：fill，用同一元素填充数组中若干位置.第一个元素是要填充的元素，必选的，后面可以跟起始和结尾，是可选的。
const b = new Array(5).fill(1);
console.log(b);
b.fill("a");
console.log(b);
b.fill("b", 1);
console.log(b);
b.fill("c", 2, 4);
console.log(b);
b.fill(5.5, -4);//也可以使用负数做参数
console.log(b);
b.fill(0, -3, -1);
console.log(b);

//反转数组使用reverse方法,这个方法会改变数组而不是返回新的数组
console.log(a.reverse());

//排序，使用sort
console.log(arr.sort());
//sort里面也可以加一个predict函数,定义排序的规则
const c = [{name: "Suzanne"}, {name: "Jim"}, {name: "Trevor"}, {name: "Amanda"}];
c.sort((a,b)=>a.name>b.name);
console.log(c);
c.sort((a,b)=>a.name[1]>b.name[1]);//按第二个字母排序
console.log(c);
//predict函数不止可以返回boolean，也可以返回数字
const k=[1,41,2,3];
console.log(k.sort((a, b)=>a - b));

