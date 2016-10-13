/**
 * Created by zjjfly on 2016/10/13.
 */
"use strict";
const USER_EMAIL = Symbol();
class User {
    //getter setter方法
    setEmail(value) {
        if (!/@/.test(value)) throw new Error(`invalid email:${value}`);
        this[USER_EMAIL] = value;
    }

    getEmail() {
        return this[USER_EMAIL];
    }
}
const user = new User();
user.setEmail("z@12.com");
console.log(user.getEmail());

class Person {
    //accssor prorperties 这个特性在as中也有
    set Email(value) {
        if (!/@/.test(value)) throw new Error(`invalid email:${value}`);
        this[USER_EMAIL] = value;
    }

    get Email() {
        return this[USER_EMAIL];
    }
}
const person = new Person();
//赋值的时候setter方法会被调用
person.email = "d@ae.com";
//取值的时候getter会被调用
console.log(person.email);

//也可以只提供一个getter方法
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get perimeter() {
        return this.width * 2 + this.height * 2;
    }
}
const rectangle = new Rectangle(1,2);
console.log(rectangle.perimeter);