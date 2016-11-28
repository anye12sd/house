const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const config = require('./config');

const app = global.app = express();

//开发环境
app.use('/', express.static(path.join(__dirname, config.path)));
app.use('/dev/views', express.static(__dirname + '/views'));
app.use('/dev/public', express.static(__dirname + '/public'));

//部署环境
app.use('/', express.static(path.join(__dirname, config.path)));
app.use('/', express.static(__dirname + '/dist'));
app.use('/public', express.static(__dirname + '/dist/public'));

app.use('/api', proxy({
  target: 'http://123.207.151.199:3000', // target host
  changeOrigin: true,            // needed for virtual hosted sites
  ws: true,                      // proxy websockets
  cookieRewrite: true,
  pathRewrite: {
    '^/api/': '/'
  }
}));

app.listen(16086, () => {
  console.log('server start at 16086')
});

module.exports = app;
