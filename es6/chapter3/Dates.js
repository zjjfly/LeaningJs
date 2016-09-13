/**
 * Created by zjjfly on 16/9/13.
 */
"use strict";
//js的日期类型Date直接取自java的实现，是不多的js和java有直接关系的部分
const now = new Date();
//初始化一个明确日期的Date
const halloween = new Date(2016,9,13);
console.log(now,halloween);
console.log(halloween.getFullYear());
console.log(halloween.getMonth());
console.log(halloween.getDate());
console.log(halloween.getDay());//周几，0表示周日
console.log(halloween.getHours());
console.log(halloween.getMinutes());
console.log(halloween.getSeconds());
console.log(halloween.getMilliseconds());