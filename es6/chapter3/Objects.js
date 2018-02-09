/**
 * Created by zjjfly on 16/9/11.
 */
'use strict';
const obj = {};
console.log(obj);
obj.size = 1;
obj['var'] = 'vars';//对象属性名称不合法时，不能直接用.访问，而是使用["属性名"]这种
const NAME = Symbol();
obj[NAME] = 'jjzi';//使用 Symbol作为属性名
console.log(obj);
console.log(obj[NAME]);
obj.NAME = 'zijj';//这样做，实际加入的属性名还是字符串型的
console.log(obj);
//在初始化的写入属性
const sam1 = {
    name: 'Sam',
    age: 4
};
console.log(sam1);
const sam2 = {name: 'Sam', age: 4};
console.log(sam2);
//属性也是object
const sam3 = {
    name: 'Sam',
    classification: {
        kingdom: 'Anamalia',
        phylum: 'Chordata'
    }
};
console.log(sam3.classification.kingdom);
console.log(sam3['classification'].kingdom);
console.log(sam3.classification['kingdom']);
console.log(sam3['classification']['kingdom']);
//对象也可以包含函数
sam3.speak=function () {
    return 'Meow!';
};
console.log(sam3);
console.log(sam3.speak());
// 删除属性
delete sam3.classification;
delete sam3.speak;
console.log(sam3);