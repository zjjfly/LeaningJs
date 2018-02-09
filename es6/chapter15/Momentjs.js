/**
 * Created by zjjfly on 2016/10/2.
 */
'use strict';
//原生的date总是得到的是本地时间,这和它最开始用于浏览器有关，用户肯定是希望得到他所在时区的时间
//为了能使用时区，引入一个js库：moment,使用 npm install --save-dev moment-timezone 安装
const moment = require('moment-timezone');

//使用utc时间
console.log(new Date(Date.UTC(2016, 10, 3)));

//使用某时区的时间
const d = moment.tz([2016, 9, 3, 9, 19], 'America/Los_Angeles').toDate();
console.log(d);//2016-10-03T16:19:00.000Z 月是从0开始计算的 0表示一月 1表示二月...

//Date类型的前后台传递,使用json
const before = {d: new Date()};
console.log(before.d instanceof Date);
const json = JSON.stringify(before);//无论什么时区的date,转成 json的时候都变为utc时间
console.log(json);
const after = JSON.parse(json);
console.log(after);
//json中没有Date类型,所以会被认为是string
console.log(after.d instanceof Date);//false
console.log(typeof after.d);//true
//要转成原来的Date,需要使用Date的构造函数
after.d = new Date(after.d);
console.log(after.d instanceof Date);

//还有一种方法是使用Date的数字表示
const b = {d: new Date().valueOf()};
console.log(b);
const j = JSON.stringify(b);
const a = JSON.parse(j);
console.log(typeof a.d);
console.log(new Date(a.d));

//格式化时间
const date = new Date(Date.UTC(1930, 4, 3));
console.log(date);
//原生的格式化方法
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());
console.log(date.toTimeString());
console.log(date.toUTCString());
//使用 moment.js的方法
console.log(moment(date).format('YYYY-MM-DD'));
console.log(moment(date).format('YYYY-MM-DD HH:mm'));
console.log(moment(date).format('YYYY-MM-DD HH:mm Z'));
console.log(moment(date).format('YYYY-MM-DD HH:mm [UTC]Z do'));//如果需要某些单词不要被解释成元字符,可以加[]
console.log(moment(date).format('dddd,MMMM [the] Do,YYYY'));
console.log(moment(date).format('h:mm a'));
// M和MM用数字表示月份,MMM用单词缩写表示月份,MMMM用完整单词表示月份
//Z表示时区,dddd表示周几 Do表示第几天,do表示这星期第几天,a表示上午还是下午

//比较日期
const d1 = new Date(1996, 2, 1);
const d2 = new Date(2009, 4, 27);
const d3 = new Date(2009, 4, 27);
console.log(d1 > d2);
console.log(d1 < d2);
console.log(d3 === d2);

//日期计算
const msDiff = d2 - d1;
const daysDiff = msDiff / 1000 / 60 / 60 / 24;
console.log(daysDiff);
//排序
const dates = [];
const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min;
for (let i = 0; i < 10; i++)
    dates.push(new Date(min + delta * Math.random()));
console.log(dates.sort((a, b) => b - a));
console.log(dates.sort((a, b) => a - b));
//moment.js计算时间的便利方法
let m=moment();//当前时间
m.add(3,'days');//往后推三天
console.log(m.format('YYYY-MM-DD HH:mm'));
m.subtract(2,'years');
console.log(m.format('YYYY-MM-DD HH:mm'));

m=moment();
m.startOf('year');//一年的第一天
console.log(m.format('YYYY-MM-DD HH:mm'));
m.endOf('month');//当月的最后一天
console.log(m.format('YYYY-MM-DD HH:mm'));
//支持链式操作
m=moment()
    .add(10,'hours')
    .subtract(3,'days')
    .endOf('month');
console.log(m.format('YYYY-MM-DD HH:mm'));

//用户友好的相对时间
console.log(moment().subtract(45,'seconds').fromNow());
console.log(moment().subtract(10,'seconds').fromNow());
console.log(moment().subtract(5,'minutes').fromNow());
console.log(moment().subtract(44,'minutes').fromNow());
console.log(moment().subtract(45,'minutes').fromNow());


