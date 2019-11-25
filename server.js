const url = require('url');

require('http').createServer((req, res) => {
    const data = {
        x: 10
    }
    const callback = url.parse(req.url, true).query.callback   //
    res.writeHead(200)
    res.end(`${callback}(${JSON.stringify(data)})`)   // 服务器收到请求后，解析参数，
// 将callback(data)以字符串的形式返还数据，前端页面会将callback(data)作为js执行
// 调用jsonpCallback(data)函数。

}).listen(3000, '127.0.0.1');
console.log('启动服务，监听 127.0.0.1:3000');
