/**
 * Created by zjjfly on 2016/10/8.
 * 子串匹配和替换
 */
'use strict';
//查找子串的方法,都是大小写敏感的
const input='As I was going to Saint Ives';
console.log(input.startsWith('As'));
console.log(input.endsWith('Ives'));
console.log(input.startsWith('going',9));
console.log(input.endsWith('going',14));
console.log(input.includes('going'));//类似 java的contains
console.log(input.includes('going',10));
console.log(input.indexOf('going'));
console.log(input.indexOf('going',10));
console.log(input.indexOf('nope'));

//替换
const output1=input.replace(/going/,'walking');//使用正则,类似 java的replaceAll
console.log(output1);
const output2=input.replace('going','walking');//使用字符串,类似 java的replace
console.log(output2);
