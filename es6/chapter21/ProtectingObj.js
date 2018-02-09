/**
 * Created by zjjfly on 2016/10/13.
 */
'use strict';

//js有三种保护对象不被随意修改的机制:freezing sealing preventing extension

//1.freezing 禁止对对象新增属性方法,禁止修改对象的任何属性,禁止修改属性的配置
const appInfo = {
    company: 'White Knight Software, Inc.',
    version: '1.3.5',
    buildId: '0a995448-ead4-4a8b-b050-9c9083279ea2',
    // this function only accesses properties, so it won"t be // affected by freezing
    copyright() {
        return `© ${new Date().getFullYear()}, ${this.company}`;
    },
};
Object.freeze(appInfo);
console.log(Object.isFrozen(appInfo));
// appInfo.newProp="test";报错
// delete appInfo.company;报错
// appInfo.company="test";报错
// Object.defineProperty(appInfo, "company", { enumerable: false });报错

//sealing 禁止新增属性和删除属性 禁止修改属性的配置
class Logger {
    constructor(name) {
        this.name = name;
        this.log = [];
    }

    add(entry) {
        this.log.push({
            log: entry,
            timestamp: Date.now(),
        });
    }
}
const log = new Logger('Captain\'s Log');
Object.seal(log);
console.log(Object.isSealed(log));
log.name = 'Captain\'s Boring Log';
log.add('Another boring day at sea...');
console.log(log);
// log.newProp="test";报错
// delete log.name;报错
// Object.defineProperty(log, "log", { enumerable: false });报错

//最后一个是最弱的保护,是对象不能被扩展,只禁止向对象中加入新的属性
const log2 = new Logger('First Mate\'s Log');
Object.preventExtensions(log2);
console.log(Object.isExtensible(log2));
log2.name = 'First Mate\'s Boring Log';
log2.add('Another boring day at sea....');
console.log(log2);
// log2.newProp="test";报错
delete log2.name;
console.log(log2);
Object.defineProperty(log2, 'log',
    {enumerable: false});