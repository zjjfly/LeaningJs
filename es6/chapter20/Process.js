/**
 * Created by zjjfly on 2016/10/12.
 */
'use strict';
//Node核心模块 进程
const fs = require('fs');
//process.exit可以退出进程,它可以接受一个error code.一般0表示没有错误,非零表示有错误
fs.readdir('/home', function (err, files) {
    if (err) {
        console.error('Fatal error: could not read data directory.');
        process.exit(1);
    }
    const txtFiles = files.filter(f => /\.txt$/i.test(f));
    if (txtFiles.length === 0) {
        console.log('No .txt files to process.');
        process.exit(0);
    }
});
//process.argv保存了命令行的参数
console.log(process.argv);

//process.env保存了环境变量
console.log(process.env);

//process.cwd保存了当前的目录
console.log(`Current directory: ${process.cwd()}`);
//process.chdir可以切换到目标目录
process.chdir(__dirname);
console.log(`New current directory: ${process.cwd()}`);