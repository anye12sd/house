/**
 * Created by Administrator on 2016/11/17.
 */
var express = require('express');
var path = require('path');

var app = express();

app.use('/',express.static(__dirname + "views"));
app.use('/static', express.static(__dirname + '/assets'));

app.listen(16086 ,function(){
    console.log('sever start at 16086')
});

module.exports = app;