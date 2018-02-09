/**
 * Created by zjjfly on 16/9/17.
 */
//对象中的 function类型的属性,被称为method
//es6中新的定义method的语法
const o = {
    name: 'Wallace',
    bark(){
        return 'Woof!';
    }
};
console.log(o.bark());

//一般情况，this关键字和那些作为对象属性的函数有关,这种情况this指代调用这个函数的对象本身。
const o1 = {
    name: 'Wallace',
    speak(){
        return `My name is ${this.name}`;
    }
};
console.log(o1.speak());
//this的值主要取决于这个函数式如何被调用的，而不是它在哪定义的
const speak = o1.speak;
console.log(speak === o1.speak);
console.log(speak());
//My name is undefined,js不知道函数speak原来是在o1中声明的，所以this被认为是undefined
//在严格模式下，这段代码会报错

//在嵌套函数中使用this会出错
// const o2 = {
//     name: "Julie",
//     greetBackwards: function () {
//         function getReverseName() {
//             let nameBackwards = "";
//             for (let i = this.name.length - 1; i >= 0; i--) {//这里的this.name是undefined
//                 nameBackwards += this.name[i];
//             }
//             return nameBackwards;
//         }
//         return `${getReverseName()} si eman ym ,olleH`;
//     },
// };
// console.log(o2.greetBackwards());
//解决方法是，把this赋值给一个变量，在嵌套函数中使用这个变量而不是this
const o2 = {
    name: 'Julie',
    greetBackwards: function () {
        const self=this;
        function getReverseName() {
            let nameBackwards = '';
            for (let i = self.name.length - 1; i >= 0; i--) {//这里的this.name是undefined
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    },
};
console.log(o2.greetBackwards());
