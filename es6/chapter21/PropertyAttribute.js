/**
 * Created by zjjfly on 2016/10/13.
 */
"use strict";
const obj = {foo: "bar"};
//Object.getOwnPropertyDescriptor可以得到对象中的属性的配置
console.log(Object.getOwnPropertyDescriptor(obj, "foo"));

//使用Object.defineProperty可以修改对象属性的配置
Object.defineProperty(obj, "foo", {writable: false});
// obj.foo="ad";//在严格模式下会报错,foo是只读的;在一般模式下,set操作不会成功但不报错
// console.log(obj.foo);

//使用Object.defineProperty也可以新增属性
//它是唯一的一种可以在对象创建之后给它加入accessor property的方法
let color = "";
Object.defineProperty(obj, "color", {
    get: function () {
        return color;
    },
    set: function (value) {
        color = value;
    }
});
Object.defineProperty(obj, "name", {
    value: "Cynthia",
});
Object.defineProperty(obj, "greet", {
    value: function () {
        return `Hello, my name is ${this.name}!`;
    }
});
obj.color = "red";
console.log(obj.color);
console.log(obj.greet());

//Object.defineProperty的一个常用的用法是让数组的中的非数字属性不可迭代
//这样使用for...in或Object.keys遍历数组就不会遍历到这些属性
const arr = [3, 1.5, 9, 2, 5.2];
Object.defineProperty(arr, "sum", {
    value: function () {
        return this.reduce((a, x)=>a + x);
    },
    enumerable: false
});
Object.defineProperty(arr, "avg", {
    value: function () {
        return this.sum() / this.length;
    },
    enumerable: false
});
console.log(arr.sum());
console.log(arr.avg());
//还可以使用Object.defineProperties方法,它的参数是一个存放属性名和属性定义的映射的对象
Object.defineProperties(arr, {
    max: {
        value: ()=>Math.max(...arr),
        enumerable: false
    },
    min: {
        value: ()=>Math.min(...arr),
        enumerable: false
    }
});
console.log(arr.max());
console.log(arr.min());
