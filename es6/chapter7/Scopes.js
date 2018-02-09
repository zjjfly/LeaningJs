/**
 * Created by zjjfly on 16/9/17.
 */
'use strict';
//词法作用域。函数可以访问在它定义的时候可访问的变量，而不是当它调用的时候可访问的变量
const x = 3;
function f() {
    console.log(x);
    console.log(y);
}
const y = 4;
f();
//全局作用域，定义在这之中的变量可以被其他任何作用域中的代码使用，所以用起来要很谨慎

//块作用域，let和const声明的变量就处在当前的块作用域
console.log('before block');
{
    console.log('inside block');
    const z = 4;
    console.log(z);
}
// console.log(`outside block; x=${z}`);//这段代码会报错

//变量遮盖,内部变量和外部变量有相同的名字时，无法访问外部的变量
{
    let i = 'blue';
    console.log(i);
    {
        let i = 3;
        console.log(i);
    }
    console.log(i);
}
console.log(typeof i);
{
    let x = {color: 'blue'};
    let y = x;
    let z = 3;
    {
        let x = 5;
        console.log(x);
        console.log(y.color);
        y.color = 'red';
        console.log(z);
    }
    console.log(x.color);
    console.log(y.color);
    console.log(z);
}
//闭包
let globalFunc;
{
    let blockVar = 'a';
    //globalFunc在这个块作用域中赋值，然后在外部调用这个函数，所以这个块作用域会继续存在
    globalFunc = function () {
        console.log(blockVar);
    };
}
globalFunc();
//函数可以让我们访问其他情况下访问不到的对象
let g;
{
    let o = {note: 'Safe'};
    g = function () {
        return o;
    };
}
let oRef = g();
oRef.note = 'Not so safe after all!';