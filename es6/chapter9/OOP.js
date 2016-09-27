/**
 * Created by zjjfly on 2016/9/25.
 */
//es6之前，js没有很明确的class定义，es6引入了class这个关键字
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
//使用dynamic properties重构Car
class SuperCar {
    get userGear() {
        return this._userGear;
    }

    set userGear(value) {
        if (this._userGears.indexOf(value) < 0) throw new Error(`Invalid gear:${value}`);
        this._userGear = value;
    }

    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = ["P", "N", "R", "D"];
        this._userGear = this._userGears[0];
    }

    shift(gear) {
        this.userGear = gear;
    }
}
//使用闭包
const SUV = (function () {
    const carProps = new WeakMap();
    class SUV {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this._userGears = ["P", "N", "R", "D"];
            carProps.set(this, {userGear: this._userGears[0]});
        }

        get userGear() {
            return carProps.get(this).userGear;
        }

        set userGear(value) {
            if (this._userGears.indexOf(value) < 0)
                throw new Error(`Invalid gear: ${value}`);
            carProps.get(this).userGear = value;
        }

        shift(gear) {
            this.userGear = gear;
        }
    }
    return SUV;
})();
(function () {
    "use strict";
    const car1 = new Car("Tesla", "Model S");
    const car2 = new Car("Mazda", "3i");
    console.log(car1 instanceof Car);//instanceOf和java中的用法一样
    console.log(car2 instanceof Car);
    car1.shift("D");
    console.log(car1);
    car1.shift("R");
    console.log(car1);
    car1.userGear = "G";
    console.log(car1);
    //car中的userGear可以直接被修改,shift中的检查就失效了，一种解决措施是动态属性
    const sc1 = new SuperCar("Tesla", "Model S");
    const sc2 = new SuperCar("Mazda", "3i");
    sc1.shift("R");
    sc2._userGear = "F";//但还是能够修改这个值,"_"只是一个大家都遵守的习惯，说明这个属性是私有的，但并没有强制性
    console.log(sc2);
    //如果真的需要保证这个属性不会在外部被直接修改，只能使用闭包了
    const suv1 = new SUV("Benz","G500");
    const suv2 = new SUV("BMW","X6M");
    suv1.shift("D");
    suv2.shift("R");
    //es6之前，实现一个类就是定义一个函数，其实es6中的class的类型还是函数,它只是一个语法糖
    console.log(typeof Car);//function
    //下面代码是es5中定义类型
    function Person(name, age) {
        this.name=name;
        this.age=age;
    }
    const person = new Person("jjzi",12);
    console.log(person);
})();
