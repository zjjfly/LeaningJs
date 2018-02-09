/**
 * Created by zjjfly on 2016/9/29.
 */
(function () {
    'use strict';
    //纯函数有两个特点:1.输入相同得到的结果就相同 2.没有副作用
    // 下面这个函数就违反了这两个原则
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let colorIndex = -1;

    function getNextRainbowColor() {
        if (++colorIndex >= colors.length) colorIndex = 0;
        return colors[colorIndex];
    }

    console.log(getNextRainbowColor());
    console.log(getNextRainbowColor());

    //要消除副作用，可以把外部变量放入闭包
    const getNextRainbowColor1 = (function () {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        let colorIndex = -1;
        return function () {
            if (++colorIndex >= colors.length) colorIndex = 0;
            return colors[colorIndex];
        };
    })();
    console.log(getNextRainbowColor1());
    console.log(getNextRainbowColor1());
    //但还是不符合第一点，每次得到的都是不同结果。解决之道是使用上一章节学的Iterator
    function getRainbowIterator() {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        let colorIndex = -1;
        return {
            next(){
                if (++colorIndex >= colors.length) colorIndex = 0;
                return {value: colors[colorIndex], done: false};
            }
        };
    }

    const it = getRainbowIterator();
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());

    //使用 typeof区分function和其他类型的值
    console.log(typeof getRainbowIterator);
})();