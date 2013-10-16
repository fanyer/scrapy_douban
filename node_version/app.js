// Basic
var express = require('express'),
    ejs = require('ejs');

// Route
var home = require("./routes/home"),
    data=  require("./routes/data")

var app = express();


// Global Config
app.set('port', process.env.PORT || 8000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + "/media"));


// Route bEgin
app.get('/', home.index);

app.get("/fetch", data.fetch);

app.listen(process.env.VCAP_APP_PORT || 8000);