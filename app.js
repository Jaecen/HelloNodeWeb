var express = require('express');
var app = express.createServer();

var api = require('./api');

app.get('/subtype/:subtype', api.get);

var port = process.env.PORT || 3000;
console.log('Application active.');
console.log('Listening on port ' + port + '.');
app.listen(port);
