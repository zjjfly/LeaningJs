/**
 * Created by zjjfly on 16/9/17.
 */
const bruce = {name: 'Bruce'};
const madeline = {name: 'Madeline'};
function greet() {
    return `hello,I'm ${this.name}`;
}
console.log(greet());
//使用call方法调用函数
console.log(greet.call(bruce));
console.log(greet.call(madeline));

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}
//call的第一个参数是函数内部的this指向的对象，剩下的参数是函数要求的参数
update.call(bruce,1949,'singer');
update.call(madeline,1942,'actress');
console.log(bruce);
console.log(madeline);

//还有一种调用方法是使用apply，这个函数类似clojure中的 apply
//第一个参数也是函数内部this指向的对象，第二个参数是一个数组，里面存放函数要求的所有参数
update.apply(bruce,[1955,'actor']);
update.apply(madeline,[1918,'writer']);
console.log(bruce);
console.log(madeline);
//这个函数在你有个数组并且你想使用它里面的值作为参数取调用函数的时候很有用
//典型的例子是计算一个数组中的最大值最小值
const arr=[2,3,-5,15,7];
let max=Math.max.apply(null,arr);
console.log(max);
let min=Math.min.apply(null,arr);
console.log(min);

//使用...可以得到和apply一样的效果，这里...的左右是把数组的值
console.log(Math.max(...arr));
console.log(Math.min(...arr));

//最后一种方法是bind,它可以永久的把this和某个值绑定
const updateBruce=update.bind(bruce);//永久和bruce绑定了
updateBruce(1904,'actor');
console.log(bruce);
// 它还可以绑定参数，使新产生的函数总是调用某个特定参数
const updateBruce1949=update.bind(bruce,1949);
updateBruce1949('singer,songwriter');
console.log(bruce);