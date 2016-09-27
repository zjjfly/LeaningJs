/**
 * Created by zjjfly on 2016/9/27.
 */
(function () {
    "use strict";
    class Vehicle {
        constructor() {
            this.passengers = [];
            console.log("Vehicle created");
        }

        addPassenger(p) {
            this.passengers.push(p);
        }
    }
    // js中的继承,es6新引入了extends关键字,和java的一样
    class Car extends Vehicle {
        constructor() {
            super();
            console.log("Car created");
        }

        deployAirbags() {
            console.log("BWOOSH!");
        }
    }
    const v = new Vehicle();
    v.addPassenger("Frank");
    v.addPassenger("Judy");
    console.log(v.passengers);
    const car = new Car();
    car.addPassenger("Alice");
    car.addPassenger("Cameron");
    console.log(car.passengers);
    // v.deployAirbags();
    car.deployAirbags();

    //js的多态
    class Motocycle extends Vehicle {
    }
    const c = new Car();
    const m = new Motocycle();
    console.log(c instanceof Car);
    console.log(c instanceof Vehicle);
    console.log(m instanceof Car);
    console.log(m instanceof Vehicle);
    console.log(m instanceof Motocycle);

    //再次讨论遍历对象的属性
    class Super {
        constructor() {
            this.name = "Super";
            this.isSuper = true;
        }
    }
    //直接在原型链中定义属性
    Super.prototype.sneaky = "not recommended!";
    class Sub extends Super {
        constructor() {
            super();
            this.isSuper=false;
            this.name = "Sub";
            this.isSub=true;
        }
    }
    const obj = new Sub();
    //下面这种会打印出sneaky
    for (let p in obj) {
        console.log(`${p}:${obj[p]}`);
    }
    //这种不会打印sneaky
    Object.keys(obj).forEach(s=>console.log(s));

    class Person{
        constructor(name,age){
            this.name=name;
            this.age=age;
        }
        toString(){
            return `${this.name} ${this.age}`;
        }
    }
    const person = new Person("j",12);
    console.log(person.toString());
})();