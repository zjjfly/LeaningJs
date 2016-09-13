/**
 * Created by zjjfly on 16/9/10.
 */
"use strict";
//es6新特性，let关键字，用于定义变量
let currentTempC=22;
console.log(currentTempC);
let targetTempC;
targetTempC=22.5;
console.log(targetTempC);
let tempC,room1="conference room",room2="lobby";//tempC没有定义，所以是undefined.
console.log(tempC+" "+room1+room2);
//es6新特性，const关键字，类似java的final
const ROOM_TEMP_C=21.5,MAX_TEMP_C=30;
console.log(ROOM_TEMP_C+MAX_TEMP_C);

