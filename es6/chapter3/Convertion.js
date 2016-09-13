/**
 * Created by zjjfly on 16/9/13.
 */
"use strict";
const numStr="3.33";
console.log(Number(numStr));//字符串转数字，如果转不了，返回NaN。
//上面直接使用Number是一种特殊，一般要加new关键字
const a=parseInt("15 volts",10);//15，parseInt和parseFloat会丢弃所以在数字后面的其他内容
const b=parseInt("3a",16);
const c=parseFloat("15.2 kph");
console.log(a,b,c);

//Date可以转成数字，使用它的valueOf方法
const d=new Date();
console.log(d.valueOf());

//转成字符串
const n=33.5;
console.log(n.toString().startsWith("3"));

//转换成布尔类型
//使用两个!!可以把任意值转换成布尔类型
const flag=0;
console.log(!!flag);
//也可以使用Boolean构造函数转换
console.log(Boolean(flag));
