/**
 * Created by zjjfly on 2016/9/27.
 */
(function () {
    "use strict";
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
    //js是两者混合,技术上说，它是单继承语言。但它也提供了方法实现多重继承或接口类似的功能
    class InsurancePolicy {
    }
    function makeInsurable(o) {
        o.addInsurancePolicy = function (p) {
            this.insurancePolicy = p;
        };
        o.getInsurancePolicy = function () {
            return this.insurancePolicy;
        };
        o.isInsured = function () {
            return !!this.insurancePolicy;
        };
    }

    const car1 = new Car();
    makeInsurable(car1);
    //对Car的对象调用makeInsurable，可以达到mixin的目的，但这样很繁琐，对每个对象都要调用一次
    car1.addInsurancePolicy(new InsurancePolicy());
    //更简单的方法：直接对Car的原型调用makeInsurable
    makeInsurable(Car.prototype);
    const car2 = new Car("Benz", "C63");
    car2.addInsurancePolicy(new InsurancePolicy());
    console.log(car2);
    //但这样还是无法解决冲突的问题，如果makeInsurable会加入一个名为shift的方法
    //解决办法是把要加入的方法用Symbol命名,因为Symbol具有唯一性
    const ADD_POLICY = Symbol();
    const GET_POLICY = Symbol();
    const IS_INSURED = Symbol();
    const _POLICY = Symbol();

    function makeInsurable1(o) {
        o[ADD_POLICY] = function (p) {
            this[_POLICY] = p;
        };
        o[GET_POLICY] = function () {
            return this[_POLICY];
        };
        o[IS_INSURED] = function () {
            return !!this[_POLICY];
        };
    }
    makeInsurable1(Car.prototype);

})();