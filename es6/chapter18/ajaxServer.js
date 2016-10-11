/**
 * Created by zjjfly on 2016/10/11.
 */
"use strict";
const http=require("http");
const server=http.createServer((req,res)=>{
    res.setHeader("content-Type","application/json");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.end(JSON.stringify({
        platform:process.platform,
        nodeVersion:process.version,
        uptime:Math.round(process.uptime())
    }));
});
const port=7070;
server.listen(port,()=>{
    console.log("Ajax server started on port:"+port);
});