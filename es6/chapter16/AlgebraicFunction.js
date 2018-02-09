/**
 * Created by zjjfly on 2016/10/7.
 */
'use strict';
//幂运算
console.log(Math.pow(2,3));
console.log(Math.sqrt(16));
console.log(Math.cbrt(27));//立方根
console.log(Math.exp(1));//底数是自然对数的幂级数
console.log(Math.expm1(1));//底数是自然对数的幂级数-1
console.log(Math.hypot(3,4));//数字平方之和的平方根

//对数运算
console.log(Math.log(Math.E));//传入的参数的自然对数
console.log(Math.log10(10));//底数是10的某个数的对数
console.log(Math.log2(4));
console.log(Math.log1p(Math.E-1));//1+x的自然对数

//各种算术运算
console.log(Math.abs(-1.1));
console.log(Math.sign(-1.2));//符号,正1负-1
console.log(Math.ceil(2.2));//向上取整
console.log(Math.floor(2.2));//向下取整
console.log(Math.trunc(-5.5));//去除小数位
console.log(Math.trunc(5.5));
console.log(Math.round(3.4));//四舍五入
console.log(Math.round(3.5));
console.log(Math.min(1,2,-1,-2));
console.log(Math.max(1,2,-1,-2));

//伪随机数生成
console.log(Math.random());//范围[0,1)
console.log(1+9*Math.random());//范围[1,10)
console.log(1+Math.floor(9*Math.random()));//[1,10)之间的整数
console.log(1+Math.floor(10*Math.random()));//[1,10]之间的整数
//js的随机数不能设置随机种子,需要的话可以使用David Bau’s seedrandom.js

//三角函数,使用弧度为单位
const π=Math.PI;
console.log(Math.sin(π/2));
console.log(Math.cos(π));
console.log(Math.tan(π/4));
console.log(Math.asin(Math.SQRT1_2));//π/2
console.log(Math.acos(Math.SQRT1_2));//π/2
console.log(Math.atan(Math.SQRT1_2));
console.log(Math.atan2(0,1));//该坐标的弧度
console.log(Math.atan2(1,1));

//双曲函数
console.log(Math.sinh(0));
console.log(Math.sinh(1));
console.log(Math.cosh(0));
console.log(Math.cosh(1));
console.log(Math.tanh(0));
console.log(Math.tanh(1));
console.log(Math.asinh(0));
console.log(Math.asinh(1));
console.log(Math.acosh(0));
console.log(Math.acosh(1));
console.log(Math.atanh(0));
