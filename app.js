require("dotenv").config();

const app = require('express')();
var http = require('http').Server(app);

const paymentRoutes = require('./routes/paymentRoutes');

app.use('/',paymentRoutes);

http.listen(3036, function(){
    console.log('Server is running');
});