var express = require('express');
var app = express();

var hostName = 'trainwithbrain.ru';
var port = 80;
var staticPath = __dirname + '/../public/';

app.use(express.static(staticPath));

app.get('/', function (req, res) {
    res.sendFile(staticPath + 'index.html');
});

app.listen(port, hostName, function() {
    console.log("Listening port %d in %s mode", port, app.settings.env);
});
