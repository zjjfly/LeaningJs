/**
 * Created by zjjfly on 2016/9/24.
 */
"use strict";
//js中,对象的顺序无法保证
//第一种遍历对象属性的方法
const SYM = Symbol();
const o = {a: 1, b: 2, c: 3, [SYM]: 4};//把Symbol作为属性名
for (let prop in o) {
    if (!o.hasOwnProperty(prop)) continue;
    console.log(`${prop}:${o[prop]}`);
}
//这种遍历没有遍历到以Symbol为属性名的属性

//第二种方法,Object.keys
Object.keys(o).forEach(prop=>console.log(`${prop}:${o[prop]}`));
//这种方法也同样没有遍历到以Symbol为属性名的属性,但它不用调用hasOwnProperty,使用起来更简便