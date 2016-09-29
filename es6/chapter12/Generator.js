/**
 * Created by zjjfly on 2016/9/28.
 */
(function () {
    "use strict";
    function* rainbow() {
        yield "red";
        yield "orange";
        yield "yellow";
        yield "green";
        yield "blue";
        yield "indigo";
        yield "violet";
    }

    const it = rainbow();
    for (let color of it) {
        console.log(color);
    }
    //generator的双向通信通过yield表达式实现
    //yield的意思是，每次调用generator的Iterator的next方法传入的参数
    function* interrogate() {
        const name = yield "What is your name?";
        const color = yield "What is your favorite color?";
        return `${name}'s favorite color is ${color}.`;
    }
    const iter=interrogate();
    console.log(iter.next());
    console.log(iter.next("zjj"));
    console.log(iter.next("z"));
    //在generator的任何地方调用return，都会将done变成true,value就是return的值
    function* abc() {
        yield "a";
        yield "b";
        return "c";
    }
    const a=abc();
    //使用for of不会打印出c。不推荐在generator中使用return返回值
    for (let obj of a) {
        console.log(obj);
    }
})();