var config = require('./config'),
    express = require('express'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    
    glob = require("glob"),
    path = require("path");

module.exports = function () {
    var app = express();
    app.use(cors());

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    app.use(express.static(path.join(__dirname,'../public')));

    app.use(passport.initialize());
    app.use(passport.session());

    require('../config/passport')(passport);
    // Index Router
    app.get("/", function (req, res) {
       res.send('Invalid Endpoint')
    });

    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname,'../public/index.html'))
    })

    var pattern = path.join(__dirname,'../route/*.route.js');
    glob(pattern, function (er, files) {
        files.forEach(function(file){
            require(file)(app);
        });
    });

    return app;
};