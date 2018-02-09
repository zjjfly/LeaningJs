/**
 * Created by zjjfly on 16/9/15.
 */
'use strict';
console.log(typeof null);//object，这是一个遗留问题，为了兼容性
console.log(typeof []);//object,这个也饱受批评
console.log(typeof undefined);//undefined
console.log(typeof {});//object
console.log(typeof true);//boolean
console.log(typeof '');//string
console.log(typeof Symbol());//symbol
console.log(typeof function () {});//function