let app = require('express')();
let express = require("express");
let server = require('http').Server(app);
let socket = require('socket.io')(server);
server.listen(8001, _=>{
    console.log('OK!');
});
// app.use(express.static("./static"));
socket.listen(server).on('connection', function (client) {
    client.on('message', function (msg) {
        client.send(msg + '，服务器端处理');
    });
    client.on('disconnect',function () {
        console.log('client socket has closed!');
    });
});
