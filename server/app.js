var express = require('express')
var app = express()
var router = express.Router()
var appData = require('./../mock/data.json')
var seller = appData.seller
var goods = appData.goods
var ratings = appData.ratings

// app.all('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:8081');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Accept, Authorization,Origin, X-Requested-With');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Content-Type', 'application/json;charset=utf-8');
//     res.header('Access-Control-Allow-Credentials','true');
//     next();
//   });

router.get('/seller', function(req, res) {
    res.json({
        status: 0,
        msg: 'suc',
        data: seller
    })
})
router.get('/goods', function(req, res) {
    res.json({
        status: 0,
        msg: 'suc',
        data: goods
    })
})
router.get('/ratings', function(req, res) {
    res.json({
        status: 0,
        msg: 'suc',
        data: ratings
    })
})

app.use('/api', router)
app.listen(3000, function() {
    console.log('server is running')
})