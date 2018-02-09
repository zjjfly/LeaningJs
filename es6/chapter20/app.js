/**
 * Created by zjjfly on 2016/10/12.
 */
'use strict';
const amanda = require('./amanda');
const debug1 = require('./message')('one');
const debug2 = require('./message')('two');
console.log(amanda.geometricSum(1, 2, 3));
console.log(amanda.arithmeticSum(2));
console.log(amanda.quadraticFormula(1, 2, -15));
debug1('started first debugger!');
debug2('started second debugger!');
setTimeout(function () {
    debug1('after some time...');
    debug2('what happens?');
    //two what happens? +0ms,这和我们期望的不一样,这是因为:
    //node只会导入一个模块一次,再次导入的时候仍然使用之前导入的那个对象
}, 200);