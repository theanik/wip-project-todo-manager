const express = require('express');
const bp = require('body-parser');
const app = express();
const cors = require('./utils/cors.js')
const router = require('./router')

app.use(cors)
app.use(bp.json());
app.use(bp.urlencoded({
    extended: true
}));
app.use(router)


const _port = 7777;
app.listen(_port,()=>{
    console.log('Application running or Port : '+_port);
})
