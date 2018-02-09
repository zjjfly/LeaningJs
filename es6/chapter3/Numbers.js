/**
 * Created by zjjfly on 16/9/10.
 */

'use strict';
let count=10;
const blue=0x0000ff;//十六进制
const umask=0o0022;//八进制
console.log(count + blue + umask);
const rootTemp=21.5;
const c=3.0e6;//科学计数法
const e=1.6e-6;
console.log(c * e*rootTemp);
const inf=Infinity;//正无穷
const ninf=-Infinity;//负无穷
console.log(inf + ninf);//正无穷加负无穷等于NaN
const nan=NaN;
console.log(nan);
//一些特殊的数字
const small=Number.EPSILON;//所有加上一之后得到不同数字的数字中最小的那个，近似值是2.2e-16
console.log(1 + small);
console.log(1 + 2.2e-17);//2.2e-17比Epsilon小，所以加上1之后得到的还是1
const bigInt=Number.MAX_SAFE_INTEGER;//可以表示的最大整数
console.log(bigInt);
const max=Number.MAX_VALUE;//可以表示的最大的数字
console.log(max);
const minInt=Number.MIN_SAFE_INTEGER;//可以表示的最小的整数
console.log(minInt);
const min=Number.MIN_VALUE;//可以表示的最小的数字
console.log(min);
console.log(Number.NEGATIVE_INFINITY);//和-Infinity等价
console.log(Number.NaN);//和NaN等价
console.log(Number.POSITIVE_INFINITY);//和Infinity等价



