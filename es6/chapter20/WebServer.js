/**
 * Created by zjjfly on 2016/10/13.
 */
"use strict";
//Node核心模块 http https
const http = require("http");
const fs = require("fs");
// const server = http.createServer((req, res)=> {
//     console.log(`${req.method} ${req.url}`);
//     res.end("hello world!");
// });

//res是一个ServerResponse的实例,它是一个Stream,所以想客户端返回一个文件很简单,直接产生一个文件的读取流
//然后使用pipe到http response
const server = http.createServer(function (req, res) {
    if (req.method === "GET" && req.url === "/favicon.ico") {
        const rs = fs.createReadStream("favicon.ico");
        rs.pipe(res);
    } else {
        console.log(`${req.method} ${req.url}`);
        res.end("Hello world!");
    }
});

const port = 8080;
server.listen(port, ()=> {
    console.log(`server started on port ${port}`);
});