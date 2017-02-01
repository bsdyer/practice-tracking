var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config');
var path = require('path');
var contentUpdates = require('./contentUpdates');
var cloudinary = require('cloudinary');

var index = require('./index.js');
var userApi = require('./api/userApi.js');
var authApi = require('./api/authApi.js');
var exerciseApi = require('./api/exerciseApi.js');
var repertoireApi = require('./api/repertoireApi.js');
var apiProtection = require('./api/apiProtect.js');

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/practiceTracker');
//Check to make sure the connection is good.
var instance = mongoose.connection;
instance.on('error', console.error.bind(console, 'connection error:'));
instance.once('open', function (callback) {
    console.log('Database up');
    contentUpdates();
});

cloudinary.config({
    cloud_name: 'practice-tracking',
    api_key: config.cloudinary_api_key,
    api_secret: config.cloudinary_api_secret
});

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cookieParser());

var nodeDir = path.resolve('node_modules');
app.use('/node_modules', express.static(nodeDir));

app.use('/api/auth', authApi);
app.use('/api/', apiProtection);
app.use('/api/users', userApi);
app.use('/api/exercises', exerciseApi);
app.use('/api/repertoire', repertoireApi);

/****WEB APP SPECIFICS****/
app.use('/', index);
/****END WEB APP SPECIFICS****/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

var server = app.listen(5000, function() {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});

module.exports = app;
