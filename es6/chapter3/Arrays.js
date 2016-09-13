/**
 * Created by zjjfly on 16/9/13.
 */
"use strict";
const a = [0];
a["a"] = 1;//数组的key可以使非数字，但这种做法要避免
console.log(a);
const a1 = [1, 2, 3, 4];
const a2 = [1, "two", 3, null];
const a3 = [
    "What the hammer?  What the chain?",
    "In what furnace was thy brain?",
    "What the anvil?  What dread grasp",
    "Dare its deadly terrors clasp?",
];
const a4 = [
    {name: "Ruby", hardness: 9},
    {name: "Diamond", hardness: 10},
    {name: "Topaz", hardness: 8},
];
const a5 = [
    [1, 3, 5],
    [2, 4, 6],];
console.log(a1, a2, a3, a4,a5);
const arr=["a","b","c"];
console.log(arr.length);
console.log(arr[1]);
arr[2]="d";//修改某个element
arr[5]="c";//如果index等于或超出了目前的length，数组会自动扩充以容纳这个element
console.log(arr);