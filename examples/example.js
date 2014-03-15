var express = require('express');
var postboard = require('..');

var app = express();

app.use(postboard());

app.listen(3000);
