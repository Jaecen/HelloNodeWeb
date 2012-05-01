var express = require('express');
var app = express.createServer();

var api = require('./api');

app.get('/subtype/:subtype', api.get);

app.listen(3000);
