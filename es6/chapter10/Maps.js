/**
 * Created by zjjfly on 2016/9/27.
 * ES6新加入的数据结构Map
 */
(function () {
    'use strict';
    //es6之前,我们一般用 object代替map，但它缺点很多，比如原型的存在、不易知道到底有多少映射、键必须是字符串或Symbol等
    //es6引入的Map解决了这些问题
    const u1 = {name: 'Cynthia'};
    const u2 = {name: 'Jackson'};
    const u3 = {name: 'Olive'};
    const u4 = {name: 'James'};
    const userRoles = new Map();
    userRoles.set(u1, 'User');
    userRoles.set(u2, 'User');
    userRoles.set(u3, 'Admin');
    userRoles//Map的set方法支持链式操作
        .set(u1, 'User')
        .set(u2, 'User')
        .set(u3, 'Admin');
    console.log(userRoles);
    //也可以在初始化的时候传入一个数组
    const userRole = new Map([
        [u1, 'User'],
        [u2, 'User'],
        [u3, 'Admin']
    ]);
    console.log(userRole);
    //获取某个键对应的值
    console.log(userRoles.get(u1));
    console.log(userRoles.get(u4));//如果不存在，返回undefined
    //has方法用来判断是否存在这个键
    console.log(userRoles.has(u2));
    console.log(userRoles.has(u4));
    //set一个已经存在的键，会覆盖它对应的原来的值
    userRoles.set(u1, 'Admin');
    console.log(userRoles.get(u1));
    console.log(userRoles.size);//获取大小

    //keys方法得到所有map的键
    for (let u of userRoles.keys()) {
        console.log(u.name);
    }
    //values方法得到所有map的值
    for (let r of userRoles.values()) {
        console.log(r);
    }
    //entries,把map变成键值对组成的数组
    for (let ur of userRoles.entries()) {
        console.log(`${ur[0].name}: ${ur[1]}`);
    }
    //可以使用解构配合entries方法
    for (let [u,r] of userRoles.entries()) {
        console.log(`${u.name}: ${r}`);
    }
    //entries是Map默认的迭代器，所有可以不用显示调用
    for (let [u,r] of userRoles) {
        console.log(`${u.name}: ${r}`);
    }
    console.log([...userRoles.values()]);//使用...把 values放入数组(而不是一个可以遍历的对象)
    // 删除一个键值对
    console.log(userRoles.delete(u2));//会返回true如果删除了，返回false说明不存在这个值
    console.log(userRoles);

    //WeakMap和Map类似，除了:1.它的键必须是对象 2.里面的键会被垃圾回收 3.不能被遍历或清空
    //因为这些特性，它可以用来存储对象的私有键
    const SecretHolder = (function () {
        const secrets = new WeakMap();
        return class {
            setSecret(secret) {
                secrets.set(this, secret);
            }

            getSecret() {
                return secrets.get(this);
            }
        };
    })();
    //通过 SecretHolder，每个对象可以存储一个秘密的值
    const a = new SecretHolder();
    const b = new SecretHolder();
    a.setSecret('secret A');
    b.setSecret('secret B');
    console.log(a.getSecret());
    console.log(b.getSecret());
})();