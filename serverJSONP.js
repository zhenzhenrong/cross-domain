let express = require('express');
app = express();
app.listen(8001, _=>{
    console.log('OK!');
});
app.get('/list',(req, res) =>{
    let {
        callback = Function.prototype
    } = req.query;
    let data = {
        code: 0,
        message:'JSON 请求数据'
    };
    res.send(`${callback}(${JSON.stringify(data)})`);
});
