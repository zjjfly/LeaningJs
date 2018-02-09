/**
 *
 * Created by zjjfly on 16/9/14.
 */
'use strict';
const i = 5;
const n = 3 - -i;//负号的优先级比减号高,正号的优先级比加号高
const m = 2 + +i;
console.log(n, m);
const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33;
const p1 = -x1 * 1;
const p2 = +x2 * 2;
const p3 = +x3 * 3;
const p4 = -x4 * 4;
console.log(p1, p2, p3, p4);//-0 6 -4.5 25.32,正号加在带负号的数字前，还是负数

console.log(10 % 3.6);//js中的数字是double类型的


let x = 2;
const r1 = x++ + x++;
const r2 = ++x + ++x;
const r3 = x++ + ++x;
const r4 = ++x + x++;
console.log(r1, r2, r3, r4);
let y = 10;
const r5 = y-- + y--;
const r6 = --y + --y;
const r7 = y-- + --y;
const r8 = --y + y--;
console.log(r5, r6, r7, r8);

//模糊比较和严格比较
//严格比较只当两个比较的的值是同一个对象或者是同一个原始类型且有相同的值时，才认为它们相等。
const a = {name: 'an object'};
const b = {name: 'an object'};
console.log(a === b);//false，虽然内容相同，但不是同一个对象，所以不等
console.log(a == b);//false，但不推荐
//模糊比较会看两个比较的对象是否可以被强迫有相同的值,如字符串"3"和数字3，就会被认为是相等的。
console.log('3' == 3);

//NaN不等于任何其他东西，包括其自身
console.log(NaN === NaN);//false
console.log(NaN == NaN);//false
// 判断一个值是否是NaN使用内置的isNaN这个函数
console.log(isNaN('a'));

//下面的这段代码会变成无限循环，因为js中小数的加减乘除会有意想不到的结果
// let o = 0;
// while (true) {
//     o += 0.1;
//     if (o === 0.3) break;
// }
// console.log(`Stopped at ${o}`);
// js中，两个不同的值比较的时候，必须相差大于Number.EPSILON这个值，才认为这两个值是不同的。
// 所以比较两个小数是否相同，看他们的差值是否小于Number.EPSILON
//使用 Number.EPSILON可以进行改进
let o = 0;
while (true) {
    o += 0.1;
    if (Math.abs(o - 0.3) < Number.EPSILON) break;
}
console.log(`Stopped at ${o}`);

//js认为是false的值:undefined,null,false,0,NaN,""
if (!undefined&&!null&&!false&&!0&&!NaN&&!''){
    console.log('1');
}
//js认为是true的值，这些需要注意：空对象，空数组，只包含空格的字符串，"false"字符串
if({}&&[]&&' '&&'false'){
    console.log(1);
}

let skipIt=true;
let xx=1;
console.log(skipIt || xx);//true
console.log(skipIt && xx);//0，因为使用&&和||逻辑运算符时，如果操作数不是布尔类型的，总是返回决定表达式最终到底true还是false的值
//利用这一特性，可以做到在某个值是null或undefined的时候，给一个默认值
let suppliedOptions;
const options = suppliedOptions || { name: 'Default' };
console.log(options);

//js也有java的三元操作符
const doIt=false;
console.log(doIt ? 'Do it!' : 'Don\'t do it!');

// 逗号操作符,用逗号组合多个表达式,整个表达式最终的值由最后一个表达式决定
let c=0,d=10,e;
e=(c++,d++);
console.log(e);