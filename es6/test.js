/**
 * Created by zjjfly on 16/9/10.
 */
"use strict";
//es6新特性：块
const sentences = [
    {subject: "Javascript", verb: "is", object: "great"},
    {subject: "Elephants", verb: "are", object: "large"},
];
//es6新特性：对象解构
function say({subject, verb, object}) {
    console.log(`${subject} ${verb} ${object}`);
}
//es6特性：for...of
for (let s of sentences) {
    say(s);
}
//es特性：箭头函数(lambda)
sentences.map(o=>say(o));