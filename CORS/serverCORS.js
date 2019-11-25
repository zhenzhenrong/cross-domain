let express = require('express');
app = express();
let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.listen(8001, _=>{
    console.log('OK!');
});
app.use(allowCrossDomain);
app.get('/list',(req, res) =>{
    let data = {
        code: 0,
        message:'CORS 请求数据'
    };
    res.send(data);
});
