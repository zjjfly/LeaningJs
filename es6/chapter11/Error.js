/**
 * Created by zjjfly on 2016/9/27.
 */
(function () {
    'use strict';
    //Error
    function validateEmail(email) {
        return email.match(/@/) ?
            email :
            new Error(`invalid email:${email}`);
    }

    const email = 'jane@doe.com';
    const result = validateEmail(email);
    if (result instanceof Error) {
        console.error(`Error:${result.message}`);
    } else {
        console.log(`valid email:${result}`);
    }
    //上面代码，在输入的值不是String的时候，还是会报错，使用try catch 可以捕获这个错误
    const e = null;
    try {
        const v = validateEmail(e);
        if (v instanceof Error) {
            console.error(`Error:${v.message}`);
        } else {
            console.log(`valid email:${v}`);
        }
    } catch (err) {
        console.error(`Error:${err.message}`);
    }
    function billPay(amount, payee, account) {
        if (amount > account)
            throw new Error('insufficient funds');//抛出异常
        return 'ok';
    }

    try {
        billPay(12, 'dd', 11);
    } catch (err) {
        console.error(err.message);
    }
    function a() {
        console.log('a: calling b');
        b();
        console.log('a: done');
    }

    function b() {
        console.log('b: calling c');
        c();
        console.log('b: done');
    }

    function c() {
        console.log('c: throwing error');
        throw new Error('c error');
    }

    function d() {
        console.log('d: calling c');
        c();
        console.log('d: done');
    }
    try {
        a();
    }catch (err){
        console.log(err.stack);//打印方法stack
    }
    try {
        d();
    }catch (err){
        console.log(err.stack);
    }
    //finally
    try {
        console.log('this line is executed...');
        throw new Error('whoops');
    }catch (err){
        console.log('there was an error...');
    }finally {
        console.log('...always executed');
        console.log('perform cleanup here');
    }
})();