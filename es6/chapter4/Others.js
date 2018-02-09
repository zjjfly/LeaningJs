/**
 * Created by zjjfly on 16/9/14.
 */
'use strict';
//可以利用逗号在for循环的第一部分多重赋值，还可以在第三部分进行多个操作
for (let temp, i = 0, j = 1; j < 30; temp = i, i = j, j = i + temp)
    console.log(j);
// for(;;) console.log("I will repeat forever");//无限循环
switch (1) {
    case 1:
        console.log('true');
        break;
    default:
        console.log('default');
        break;
}
//for in 循环
const player = {name: 'Thomas', rank: 'Midshipman', age: 25};
for (let prop in player) {
    if (!player.hasOwnProperty(prop)) continue;
    console.log(prop + ':' + player[prop]);
}
//es6新的语法 for of循环
const keys = Object.keys(player);
for (let prop of keys) {
    console.log(prop + ':' + player[prop]);
}
//如果要在遍历数组的时候删除其中的符合某些条件的元素，需要倒序遍历
const bigArrayOfNumbers = [1, 2, 3, 4, 5, 6];
for (let i = bigArrayOfNumbers.length - 1; i >= 0; i--) {
    if (isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);
}
console.log(bigArrayOfNumbers);
function isPrime(i) {
    return i == 1;
}