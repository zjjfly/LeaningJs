/**
 * Created by zjjfly on 2016/9/27.
 * ES6新加入的数据结构Set
 */
(function () {
    'use strict';
    //Set不能放入重复的值
    const roles = new Set();
    roles.add('User');
    roles.add('Admin');
    console.log(roles.size);
    roles.add('User');
    console.log(roles.size);
    roles.delete('Admin');//会返回true如果删除了，返回false说明不存在这个值
    console.log(roles);
    console.log(roles.has('Admin'));
    for (let obj of roles) {
        console.log(obj);
    }
    //可以传入一个数组初始化Set
    const arr = [1, 2, 4, 5, 6, 2];
    console.log(new Set(arr));

    //WeakSet，只包含对象，而且这些对象可能会被垃圾回收
    //和WeakMap一样，其中的值不能被遍历
    const naughty = new WeakSet();
    const children = [{name: 'Suzy'}, {name: 'Derek'}];
    naughty.add(children[1]);
    for (let child of children) {
        if (naughty.has(child)) {
            console.log(`Coal for ${child.name}!`);
        } else {
            console.log(`Presents for ${child.name}!`);
        }
    }

})();