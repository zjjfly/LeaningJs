/**
 * Created by zjjfly on 2016/9/26.
 */
//函数都有一个特殊的属性prototype
//实例化一个新的对象，会同时把函数的prototype放入对象的_proto_属性中
//所以类的所有实例都有相同的prototype
//给对象定义属性和方法，会覆盖对象的prototype中的属性和方法
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userGears = ["P", "N", "R", "D"];
        this.userGear = this.userGears[0];
    }

    shift(gear) {
        if (this.userGears.indexOf(gear) < 0) throw new Error(`Invalid gear:${gear}`);
        this.userGear = gear;
    }
}
(function () {
    "use strict";
    const car1=new Car();
    const car2=new Car();
    console.log(car1.shift===Car.prototype.shift);
    car1.shift("D");
    //car1.shift("d");//error
    console.log(car1.userGear);
    console.log(car1.shift==car2.shift);
    car1.shift=function (gear) {
        this.userGear=gear.toUpperCase();
    };
    console.log(car1.shift===Car.prototype.shift);
    console.log(car1.shift===car2.shift);
    car1.shift("d");
    console.log(car1);
})();