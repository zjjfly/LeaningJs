/**
 * Created by zjjfly on 2016/10/13.
 */
'use strict';
const fs = require('fs');
//Node核心模块 Stream
//使用stream写文件
const ws = fs.createWriteStream('stream.txt', {encoding: 'utf8'});
ws.write('line1 \n');
ws.write('line2 \n');
ws.end('line3');//end方法也可以写入数据,如果只写一次数据,可以不用 write方法直接使用end方法.

//使用stream读文件
const rs = fs.createReadStream('stream.txt', {encoding: 'utf8'});
rs.on('data', data=> {
    console.log('>> data:' + data.replace('\n', '\\n'));
});
rs.on('end', ()=> {
    console.log('>> end');
});

//使用piping 复制文件
const r = fs.createReadStream('stream.txt');
const w = fs.createWriteStream('stream_copy.txt');
r.pipe(w);

fs.unlinkSync('stream.txt');
fs.unlinkSync('stream_copy.txt');