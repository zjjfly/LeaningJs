/**
 * Created by zjjfly on 2016/10/12.
 */
// function caculate(a, x, n) {
//     if (x === 1) return a * n;
//     return a * (1 - Math.pow(x, n)) / (1 - x);
// }
//导出一个函数,不常用
// module.exports = caculate;
//更常用的是导出多个函数,这种情况应该导出一个含有多个函数的对象
module.exports = {
    geometricSum(a, x, n) {
        if (x === 1) return a * n;
        return a * (1 - Math.pow(x, n)) / (1 - x);
    },
    arithmeticSum(n) {
        return (n + 1) * n / 2;
    },
    quadraticFormula(a, b, c) {
        const D = Math.sqrt(b * b - 4 * a * c);
        return [(-b + D) / (2 * a), (-b - D) / (2 * a)];
    },
};
//下面是上面的代码的简写
//如果上面的代码不注释掉,在其他js中调用test方法会报错,因为:
//所有的exports收集到的属性和方法，都赋值给了module.exports。
//当然，这有个前提，就是Module.exports本身不具备任何属性和方法。
//如果，Module.exports已经具备一些属性和方法，那么exports收集来的信息将被忽略。
exports.test=function(a, x, n) {
    if (x === 1) return a * n;
    return a * (1 - Math.pow(x, n)) / (1 - x);
};