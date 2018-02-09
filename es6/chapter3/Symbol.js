/**
 * Created by zjjfly on 16/9/11.
 */
'use strict';
//es6的新特性:Symbol
const RED=Symbol();
console.log(RED);
const ORANGE=Symbol('The color of a sunset');
console.log(ORANGE);
console.log(RED===ORANGE);//每个 Symbol都是唯一的，不可能相等
