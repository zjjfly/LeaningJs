/**
 * Created by zjjfly on 2016/10/8.
 */
"use strict";
//正则表示式的初始化
const re1 = /going/;//用字面量语法,
const re2 = new RegExp("going");//用构造器
console.log(re1, re2);
//除了特殊情况,应该尽量用字面量语法

//使用正则搜索字符串
const input = "As I was going to Saint Ives";
const re = /\w{3,}/ig;
//使用String的方法搜索
console.log(input.match(re));
console.log(input.search(re));//匹配的数量

//使用正则的方法搜索
console.log(re.test(input));//是否有匹配的,如果是全局查找的regexp,这个方法会让正则对象去查找下一个匹配项
console.log(re.exec(input));//going,如果没有上面的那行代码,则是was,原因在上面注释里
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.exec(input));

//直接用正则字面量
console.log(input.match(/\w{3,}/ig));
console.log(input.search(/\w{3,}/ig));
console.log(/\w{3,}/ig.test(input));
console.log(/\w{3,}/ig.exec(input));
//一般最常用的方法是String的match和RegExp的test

//使用正则替换
console.log(input.replace(/\w{4,}/ig, "****"));//如果只要替换第一个,把后面的g去掉

//交替,使用|,类似于逻辑判断中的或
const html = "HTML with <a href='/one'>one link</a>, and some JavaScript." + "<script src='stuff.js'></script>";
const matches = html.match(/area|a|link|script|source/ig);
console.log(matches);

//字符集
const beer99 = "99 bottles of beer on the wall " + "take 1 down and pass it around -- " +
    "98 bottles of beer on the wall.";
console.log(beer99.match(/[0-9]/g));
console.log(beer99.match(/[\-0-9a-z.]/g));
console.log(beer99.match(/[a-z0-9.-]/g));//顺序无所谓

//带名字符集,大写表示的字符集和小写表示的是相反的
const stuff =
    "hight: 9\n" + "medium: 5\n" + "low: 2\n";
console.log(stuff);
console.log(stuff.match(/\d+/ig));
console.log(stuff.match(/\D+/ig));//非数字
console.log(stuff.match(/\w+/ig));
console.log(stuff.match(/\W+/ig));//非字母和_
console.log(stuff.match(/\s+/ig));//tab,换行,空格
console.log(stuff.match(/\S+/ig));//非tab,换行,空格
console.log(stuff.replace(/\s+/ig, ""));
//大写的字符集在一些时候很有用,比如格式化电话号码,因为用户输入的电话号码格式五花八门,而我们只需要那些数字
console.log("(0512)663-87825".replace(/\D+/g, ""));
//判断字符串至少有一个不为空的字符
console.log(/\S/.test("   a   "));

//表示重复{n},{n,},{n,m},?,+,*

//“.”表示出换行符以外的字符,一般用来消费你不关心的字符
const s = "Address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525.";
console.log(s.match(/\d{5}.*/g));
//"\"加在元字符之前表示转义

//匹配所有字符,一般使用[\s\S]
console.log("a-d.ad1131\tad \n".match(/[\s\S]+/));


