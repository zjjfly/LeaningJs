/**
 * Created by zjjfly on 16/9/18.
 */
"use strict";
const arr1 = [1, 2, 3];
const arr2 = ["one", 2, "three"];
const arr3 = [[1, 2, 3], ["one", 2, "three"]];
const arr4 = [
    {name: "Fred", type: "object", luckyNumbers: [5, 7, 13]},
    [
        {name: "Susan", type: "object"},
        {name: "Anthony", type: "object"}
    ],
    1,
    function () {
        return "arrays can contain functions too";
    },
    "three"
];
console.log(arr1[0]);
console.log(arr1[2]);
console.log(arr3[1]);
console.log(arr4[1][0]);
console.log(arr1.length);
console.log(arr4.length);
console.log(arr4[1].length);
arr1[4]=5;
console.log(arr1);
console.log(arr2[10]);
console.log(arr2.length);

const arr5=new Array();
console.log(arr5);
const arr6=new Array(1,2,3,4);
console.log(arr6);
const arr7=new Array(...arr6);
console.log(arr6 === arr7);
console.log(arr7);
console.log(new Array(2));//当Array构造函数只有一个数字n做参数时，表示构造一个长度是n的数组

