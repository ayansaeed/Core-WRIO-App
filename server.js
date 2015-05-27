var nconf = require("./wrio_nconf.js").init();
var express = require('express');
var app = require("./wrio_app.js").init(express);
var server = require('http').createServer(app).listen(nconf.get("server:port"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function (request, response) {

    response.render('core.ejs',{});

});
