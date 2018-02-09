/**
 * Created by zjjfly on 16/9/18.
 */
//不推荐在全局作用域使用严格模式
//你可以把你所有的代码包在一个立即执行函数中，然后在这个函数的开始使用严格模式
(function () {
    'use strict';
    //let是es6新引入的，用它声明一个变量，这个变量在声明前不会存在
    //而用var声明变量，它在声明之前就会存在
    x;
    // let x=3;//使用let声明,报错
    var x = 3;//使用var声明,可以
    //s会把作用域中的var声明的变量提前到最上面.注意，只提示声明，不提示赋值。
    if (z !== 3) {
        console.log(y);
        var y = 5;
        if (y === 5) {
            var z = 3;
        }
        console.log(y);
    }
    if (z === 3) {
        console.log(y);
    }
    //上面这段代码js解释的时候会变成下面这样：
    // var z;
    // var y;
    // if (z !== 3) {
    //     console.log(y);
    //     y=5;
    //     if (y === 5) {
    //         z=3;
    //     }
    //     console.log(y);
    // }
    // if (z === 3) {
    //     console.log(y);
    // }

    // js中,用var可以重复定义变量
    var n = 3;
    if (n === 3) {
        var n = 2;//重复定义了变量n，但js不会报错
        console.log(n);
    }
    console.log(n);
    //上面的代码js会解释成下面这样：
    // var n;
    // n = 3;
    // if (n === 3){
    //     n=2;
    //     console.log(n);
    // }
    // console.log(n);

    //js中的函数和使用var定义的变量一样，会提升到它们所在作用域的顶部，所以你可以在定义函数之前使用这个函数。
    f();
    function f() {
        console.log('f');
    }

//但使用函数表达式赋值给某个变量的函数不会被提升，无论是使用let还是var声明的函数
// g();
// let g=function () {
//     console.log("g");
// }

//由于js的提升机制，es6之前可以直接使用typeof判断某个变量是否被初始化
//但使用es6的let声明的变量，不可以使用typeof去判读是否已经声明,原因就是上面说的var和let的区别
//但es6中用 typeof去判读变量是否定义的需求比较少，所以一般不会有问题
//     if (typeof m === "undefined") {
//         console.log("m does not exist or is undefined");
//     } else {
//     }
//     let m = 5;
})();