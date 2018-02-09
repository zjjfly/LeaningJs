/**
 * Created by zjjfly on 2016/10/12.
 */
'use strict';
//node核心模块 文件系统
const fs = require('fs');
const path = require('path');
//写文件
// fs.writeFile("hello.txt","hello from Node!",err=>{
//     if(err) return console.log("Error writing to file");
// });
//node程序的当前工作路径是从你运行这个程序时所在的路径继承而来
//所以当你在不同的路径下执行执行app.js时,hello.txt都产生在执行路径下

//Node提供了一个特殊的变量,__dirname,它总是指向源文件所在的路径
// fs.writeFile(__dirname+"/hello.txt","hello from Node!",err=>{
//     if(err) return console.log("Error writing to file");
// });
//上面的代码平台兼容性不好,因为 Windows平台的文件分隔符不是/
//可以使用 Node的path模块解决这个问题
fs.writeFile(path.join(__dirname, 'hello.txt'), 'hello from Node!', err=> {
    if (err) return console.log('Error writing to file');
});

//读文件
fs.readFile(path.join(__dirname, 'hello.txt'), {encoding: 'utf8'}, (err, data)=> {
    if (err) return console.error('Error reading file.');
    console.log('Fie content:');
    console.log(data);
});

//fs模块中的函数都有等价的同步函数,但如果你开发的web应用,不要使用这些同步方法
//因为是同步版本的,所以需要使用try catch进行错误处理
try {
    //同步写文件
    fs.writeFileSync(path.join(__dirname, 'hello.txt'), 'hello from Node!');
    //同步读文件
    const data = fs.readFileSync(path.join(__dirname, 'hello.txt'), {encoding: 'utf8'});
    console.log(data);
}catch (err){
    console.error(err.message);
}

//列出目录下的文件
fs.readdir(__dirname,(err,files)=>{
    if(err) return console.error('Unable to read directory contents');
    console.log(`Contents of ${__dirname}`);
    console.log(files.map(f=>'\t'+f).join('\n'));
});

//获取文件的状态
fs.stat(path.join(__dirname, 'hello.txt'),(err,stat)=>{
    if(err) return console.error('Unable to get stat');
    console.log(stat);
});

//重命名文件
fs.renameSync(path.join(__dirname, 'hello.txt'),path.join(__dirname, '1.txt'));
//删除文件
fs.unlinkSync(path.join(__dirname, '1.txt'));
