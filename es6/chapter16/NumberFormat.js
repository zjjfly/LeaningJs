/**
 * Created by zjjfly on 2016/10/7.
 */
"use strict";
//js中数字的格式化的结果是String类型的值
//固定小数位,如果比格式化之前的小数位少,会进行四舍五入,而不是截断
let x=19.51;
console.log(x.toFixed(3));
console.log(x.toFixed(2));
console.log(x.toFixed(1));//19.5
console.log(x.toFixed(0));//20

//指数表示,也会根据需要四舍五入,不是截断
x=3800.5;
console.log(x.toExponential(4));
console.log(x.toExponential(3));
console.log(x.toExponential(2));
console.log(x.toExponential(1));
console.log(x.toExponential(0));

//固定精度,也会四舍五入,根据需要还会使用指数表示
x=1000;
console.log(x.toPrecision(5));
console.log(x.toPrecision(4));
console.log(x.toPrecision(3));
console.log(x.toPrecision(2));
console.log(x.toPrecision(1));

//不同进制,二进制,八进制,十六进制
x=12;
console.log(x.toString());
console.log(x.toString(10));
console.log(x.toString(16));
console.log(x.toString(8));
console.log(x.toString(2));

//如果需要更丰富的格式化功能,推荐使用Numeral.js