/**
 * Created by zjjfly on 2016/10/2.
 */
"use strict";
//初始化Date的时候，可以传入年月日 时分秒
new Date();
new Date(2016,10);
new Date(2016,10,2);
new Date(2016,10,2,8);
new Date(2016,102,8,50);
new Date(2016,102,8,50,5);
new Date(2016,102,8,50,5,500);

//传入(与1970年一月一日相差的)毫秒数
const date = new Date(0);
console.log(date);
const date1 = new Date(1000);
console.log(date1);
const date2 = new Date(1463443200000);
console.log(date2);

//还可以传入负的毫秒数
const date3 = new Date(-365*24*60*60*1000);
console.log(date3);

//还可以直接传入时间字符串,默认转成本地时间
const date4 = new Date("June 14, 1903");
console.log(date4);
const date5 = new Date("June 14, 1903 GMT-0000");
console.log(date5.valueOf());//得到毫秒数