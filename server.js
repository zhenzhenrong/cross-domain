let express = require('express');
app = express();
app.listen(8001, _=>{
    console.log('OK!');
});
app.get('/list',(req, res) =>{
    let data = {
        code: 0,
        message:'JSONP 请求数据'
    };
    res.send(data);
});
