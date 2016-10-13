/**
 * Created by zjjfly on 2016/10/13.
 */
"use strict";
const coefficients = {
    a: 1,
    c: 5
};
function evaluate(x, c) {
    return c.a + c.b * x + c.c * Math.pow(x, 2);
}
console.log(evaluate(3, coefficients));
//使用代理实现对象某个属性缺失时取一个默认值
const betterCoefficients = new Proxy(coefficients, {
    get(target, key){
        return target[key] || 0;
    }
});
console.log(evaluate(3, betterCoefficients));

//代理可以用来限制对属性或方法的访问
var cook = {
    name: "Walt",
    redPhosphorus: 100, // dangerous
    water: 500, // safe
};
const protectedCook = new Proxy(cook, {
    set(target, key, value) {
        if (key === "redPhosphorus") {
            if (target.allowDangerousOperations) {
                return target["redPhosphorus"] = value;
            } else {
                console.log("Too dangerous!");
                return target["redPhosphorus"];
            }

        }
        // all other properties are safe
        return target[key] = value;
    }
});
protectedCook.water = 550; // 550
protectedCook.redPhosphorus = 150; // Too dangerous!
protectedCook.allowDangerousOperations = true;
protectedCook.redPhosphorus = 150;