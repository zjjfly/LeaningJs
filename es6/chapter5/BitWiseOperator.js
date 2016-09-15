/**
 * Created by zjjfly on 16/9/15.
 */
"use strict";
//二进制数左移一位，相当于乘上2
console.log(0b1010);
console.log(0b1010 << 1);
//右移一位相当于除以2，如果有小数位，去掉取整
console.log(0b1011 >> 1);

//位操作还可以用在高效的存储标志，如Linux系统的读写执行权限的组合，开关
const FLAG_READ=1;
const FLAG_WRITE=2;
const FLAG_EXECUTE=4;
let p=FLAG_READ|FLAG_WRITE;//某个用户的权限 读和写
console.log(p);
let haswrite=p&FLAG_WRITE;//true，他有写的权限
console.log(haswrite);
let hasExcute=p&FLAG_EXECUTE;//false，他没有执行的权限
console.log(hasExcute);
p=p^FLAG_WRITE;//异或操作，关闭写的权限
console.log(p);//1
p=p^FLAG_WRITE;//异或操作，开启写的权限
console.log(p);
const hasReadAndExecute = p & (FLAG_READ | FLAG_EXECUTE);
console.log(hasReadAndExecute);