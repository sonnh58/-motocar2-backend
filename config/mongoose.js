var config = require('./config'),
    mongoose = require('mongoose'),
    glob = require("glob"),
    path = require("path");
    
module.exports = function() {
    mongoose.Promise = global.Promise;
    var db = mongoose.connect(config.db);
  
    var pattern = path.join(__dirname,'../model/*.model.js');
    var files = glob.sync(pattern);
    
    files.forEach(function(file){
        require(file);
    });

    console.log('connect db!');
    return db;
};