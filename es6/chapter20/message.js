/**
 * Created by zjjfly on 2016/10/12.
 */
'use strict';
let lastMessage;
module.exports = function (prefix) {
    return function (message) {
        const now=new Date();
        const sinceLastMessage=now-(lastMessage||now);
        console.log(`${prefix} ${message} +${sinceLastMessage}ms`);
        lastMessage=now;
    };
};