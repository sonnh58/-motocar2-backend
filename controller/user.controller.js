var mongoose = require('mongoose'),
    path = require('path'),
    User = mongoose.model('User'),
    config = require('../config/config'),
    jwt = require('jsonwebtoken');

exports.authenticate = function(req, res) {
    var username = req.body.username;
    var password = req.body.password
    console.log(req.body);
    User.findOne({username: username}, function (err, user) {
        if(err) throw err;
        if(!user) {
            return res.json({success: false, msg: 'User not found'});
        }
        console.log(user);
        if(password == user.password) {
            var token = jwt.sign(user, config.secretKey, {
                expiresIn : 60*24*7 //in minutes, 1 week
            });
            console.log(token);
            res.json({
                success: true,
                token: 'Bearer ' + token,
                user: {
                    id: user._id,
                    name: user.name,
                    username: user.username
                }
            })
        } else {
            res.json({
                success: false,
                msg: 'Wrong password'
            })
        }
    });
};

exports.getUserbyUsername = function (username, callback) {
    User.find({username: username}, callback);
};

exports.getUserbyId = function (id, callback) {
    User.findById(id, callback)
};

exports.dashboard = function (req, res) {
    res.send('da dang nhap');
};
