var path = require('path');
var fs = require('fs');
var pxoxy = require('express-http-proxy');
var express = require('express');
var app = express();
app.enable('trust proxy');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

//proxy
var test_host = "127.0.0.1:3000";
app.use('/chengwen',pxoxy(test_host,{
	forwardPath:function(req,res){
		return '/chengwen'+require('url').parse(req.url).path;
	}
}));

app.use(express.static(path.join(__dirname,'/')));
var server = app.listen("1024", function() {
	console.log('Listening on port ' + server.address().port)
});
