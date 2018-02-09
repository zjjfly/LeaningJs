/**
 * Created by zjjfly on 2016/9/29.
 */
'use strict';
//一般把函数放在数组作为一个管道，顺序的执型函数。比如做图像处理的时候
const sin = Math.sin;
const cos = Math.cos;
const theta = Math.PI / 4;
const zoom = 2;
const offset = [1, -3];
const pipeline = [
    function rotate(p) {
        return {
            x: p.x * cos(theta) - p.y * sin(theta), y: p.x * sin(theta) + p.y * cos(theta),
        };
    },
    function scale(p) {
        return {x: p.x * zoom, y: p.y * zoom};
    },
    function translate(p) {
        return {x: p.x + offset[0], y: p.y + offset[1]};
    }];
const p = {x: 1, y: 1};
let p2 = p;
for (let i = 0; i < pipeline.length; i++) {
    p2 = pipeline[i](p2);
}
console.log(p2);
