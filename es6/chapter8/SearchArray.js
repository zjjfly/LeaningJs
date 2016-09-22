/**
 * Created by zjjfly on 16/9/20.
 */
"use strict";
const o = {name: "Jerry"};
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];
console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(5));
console.log(arr.indexOf("a"));
console.log(arr.lastIndexOf("a"));
console.log(arr.indexOf({name: "Jerry"}));//-1,indexOf是严格相等，必须是同一个对象才可以
console.log(arr.indexOf(o));
console.log(arr.indexOf([1, 2]));
console.log(arr.indexOf("9"));
console.log(arr.indexOf(9));
//indexOf和lastIndexOf可以有一个可选的参数，指明开始搜索的index.
//但它们搜索的方向不同，indexOf是朝大于index的方向搜索，而lastIndexOf是向小于index的方向搜索
console.log(arr.indexOf("a", 5));
console.log(arr.indexOf(5, 5));
console.log(arr.lastIndexOf(5, 4));//1,从开始查找的index开始算起
console.log(arr.lastIndexOf(true, 4));

//findIndex,用法类似indexOf类似，但传入的是一个predict function
const a = [{id: 5, name: "Judith"}, {id: 7, name: "Francis"}];
console.log(a.findIndex(o=>o.id === 5));
console.log(a.findIndex(o=>o.name === "Francis"));
console.log(a.findIndex(o=>o === 3));

//find，和findIndex类似，但返回结果是符合要求的元素
console.log(a.find(o=>o.id >= 5));
//传入find，和findIndex的函数,还可以有一个参数，元素的index
//通过这个index，可以实现类似index的对查找起始位置的设置
console.log(a.find((x, i)=> i > 0 && x.id === 7));
//find，和findIndex的函数也可以再跟一个参数，指明在传入的函数中的this
class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}
Person.nextId = 0;
const jamie = new Person("Jamie"),
    juliet = new Person("Juliet"),
    peter = new Person("Peter"),
    jay = new Person("Jay");
const persons = [jamie, juliet, peter, jay];
var person=persons.find(p => p.name === this.name, jay);
console.log(person);

//some，寻找是否有满足条件的元素，有则返会true，反之是false
const b=[5,7,12,15,17];
console.log(b.some(x=>x % 2 === 0));
//every,检查每个元素是否满足条件，都满足才返回true，否则是false
console.log(b.every(x=>x>0));
//some和every也可以有第二个参数，指定this的值



