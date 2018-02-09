/**
 * Created by zjjfly on 2016/9/29.
 */
'use strict';
const fs=require('fs');
function f() {
    console.log('After timeout: ' + new Date());
}
console.log('Before timeout: ' + new Date());
setTimeout(f, 2 * 1000);
console.log('I happen after setTimeout!');
console.log('Me too!');
//一般调用 setTimeout的时候传入一个匿名函数
const timeId=setTimeout(function () {
    console.log('After timeout: ' + new Date());
}, 3 * 1000);
clearTimeout(timeId);//和clearInterval类似，可以停止s etTimeout的运行。
//还有一个和 setTimeout类似的函数,setInterval,但不像setTimeout只执行一次,它会定时重复执行
const start = new Date();
let i = 0;
const intervalId = setInterval(function () {
    let now = new Date();
    if (now.getMinutes() !== start.getMinutes() || ++i > 5)
        return clearInterval(intervalId);//调用clearInterval可以停止定时器
    console.log(`${i}: ${now}`);
}, 3 * 1000);
//Node中，有一个error-first callback的习惯,就是 callback的第一个参数是一个error对象,比如读取文件操作
//在你开发一个需要传入回调函数的接口时，如果不使用promise，那么请遵守这一习惯
const fileName='may_or_may_not_exist.txt';
fs.readFile(fileName,function (err, data) {
    if(err) return console.error(`error reading file ${fileName}:${err.message}`);
    console.log(`${fileName} contents: ${data}`);
});
function readSketchFile() {
    try {
        fs.readFile('does_not_exist.txt',function (err, data) {
            if(err) throw err;
            console.log(data);
        });
    }catch (err){
        console.log('warning: minor issue occurred, program continuing\'');
    }
}
readSketchFile();
//callback有很多缺点，一个是著名的回调地狱
//还有一个是错误处理，上面的代码虽然有捕获异常的代码，但实际上回调函数中抛出的异常没有被捕获
//因为try catch只在同一个函数中起作用,但 error是在回调的匿名函数中抛出的
//还有一个问题是你无法保证callback肯定只会调用一次,这点js无法保证。
