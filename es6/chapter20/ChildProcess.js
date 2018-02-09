/**
 * Created by zjjfly on 2016/10/13.
 */
'use strict';
//Node核心模块 子进程
//它有三个主要方法exec execFile fork
//exec用于执行一段shell脚本,这个方法是最常用的
//execFile用于直接执行一个可执行的文件
//fork用于执行其他Node脚本
const path = require('path');
const exec = require('child_process').exec;
//exec有一个可选的参数options,是一个对象,可以放执行路径,环境变量,使用的shell等
exec('ls',{cwd:path.join(__dirname,'..')}, (err, stdout, stderr)=> {
    if (err) return console.error('Error executing \'ls\'');
    stdout = stdout.toString(); // convert Buffer to string
    console.log(stdout);
    stderr = stderr.toString();
    if (stderr !== '') {
        console.error('error:');
        console.error(stderr);
    }
});