/**
 * Created by zjjfly on 16/9/20.
 */
(function () {
    "use strict";
    const cart = [{name: "Widget", price: 9.95}, {name: "Gadget", price: 22.95}];
    const names = cart.map(x => x.name);
    const prices = cart.map(x => x.price);
    const discountPrices = prices.map(x => x * 0.8);
    console.log(discountPrices);
    //书中有错误，因为toLowerCase这个函数没有参数，一定传入这个函数的话，应该使用下面这样的办法
    const lcNames = names.map(Function.prototype.call, String.prototype.toLowerCase);
    console.log(lcNames);
    //利用map函数把names和prices合并成原来的cart
    console.log(names.map((x, i)=>({name: x, price: prices[i]})));
    //加一个括号的原因是，不加括号箭头函数不把{}中的数据当成是一个代码块。

    //filter，过滤不符合条件的元素，返回一个新的数组
    const cards = [];
    for (let suit of ["H", "C", "D", "S"]) {
        for (let value = 1; value <= 13; value++) {
            cards.push({suit, value});
        }
    }
    console.log(cards);
    console.log("\n");
    console.log(cards.filter(c=>c.value === 2));
    console.log("\n");
    console.log(cards.filter(c=>c.suit == "D"));
    console.log("\n");
    console.log(cards.filter(c=>c.value > 10));
    console.log("\n");
    console.log(cards.filter(c=>c.value > 10 && c.suit === "H"));
    console.log("\n");
    //filter和map结合
    console.log(cards.filter(c=>c.value === 2).map(cardToString));
    console.log(cards.filter(c => c.value > 10 && c.suit === "H").map(cardToString));

    //reduce，第一个参数是使用函数，它的第一个参数一个累加器.reduce的第二个参数是一个累加器的初始值，是可选的，类似clojure的reduce。
    //reduce是Array拥有的最通用和最强大的函数，map和filter都可以使用reduce实现
    //如果没有初始值，第一次调用函数传入的参数是第一个元素和第二个元素
    const arr = [5, 6, 14, 4];
    const sum = arr.reduce((a, x)=>a += x, 0);
    console.log(sum);
    console.log(arr.reduce((a, x)=>a += x));
    //初始值使用对象是非常有用的方法
    const words = ["Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", "November", "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];
    console.log(words.reduce((a, x)=> {
        if (!a[x[0]]) a[x[0]] = [];
        a[x[0]].push(x);
        return a;},{}));
    //计算平均数，方差 标准差
    const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
    const stats=data.reduce((a,x)=>{
        a.N++;
        let delta=x-a.mean;
        a.mean+=delta/a.N;
        a.M2+=delta*(x-a.mean);
        return a;
    },{N:0,mean:0,M2:0});
    if(stats.N>2){
        stats.variance=stats.M2/(stats.N-1);
        stats.stdev=Math.sqrt(stats.variance);
    }
    console.log(stats);

    //使用string做初始值
    const longwords=words.reduce((a,x)=>x.length>6?a+" "+x:a,"").trim();
    console.log(longwords);

    //filter,map,reduce对那些没有赋值或被删除的元素，不会去调用传入的函数
    console.log(new Array(10).map(()=>10));
    const numbers=[1,2,3,4,5];
    delete numbers[2];
    console.log(numbers.map(()=>9));

    //join函数，类似scala的mkString函数
    //这个函数中,array中未赋值的和删除的元素会当成空字符串
    const items = [1, null, "hello", "world", true, undefined];
    delete items[3];
    console.log(items.join());//使用默认的,作为分隔符
    console.log(items.join(""));
    console.log(items.join(" -- "));

    //还有一个caocat方法，可以在array结尾加上多个元素
    console.log(items.concat(6, 13, 1));
})();
function cardToString(c) {
    "use strict";
    const suits = {"H": "\u2665", "C": "\u2663", "D": "\u2666", "S": "\u2660"};
    const values = {1: "A", 11: "J", 12: "Q", 13: "K"};
    for (let i = 0; i <= 10; i++) {
        values[i] = i;
    }
    return values[c.value] + suits[c.suit];
}