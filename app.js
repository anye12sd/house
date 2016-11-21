let express = require('express');
let path = require('path');

let app = express();

//开发环境
app.use('/dev/views', express.static(__dirname + '/views'));
app.use('/dev/public', express.static(__dirname + '/public'));

//部署环境
app.use('/', express.static(__dirname + '/dist'));
app.use('/public', express.static(__dirname + '/dist/public'));

app.listen(16086, () => {
  console.log('server start at 16086')
});

module.exports = app;
