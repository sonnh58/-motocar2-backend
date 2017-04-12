var mongoose = require('mongoose'),
    path = require('path'),
    User = mongoose.model('User'),
    config = require('../config/config'),
    jwt = require('jsonwebtoken');

exports.authenticate = function(req, res) {
    var username = req.body.username;
    var password = req.body.password

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
            res.json({
                success: true,
                token: 'Bearer ' + token,
                user: {
                    _id: user._id,
                    name: user.name,
                    username: user.username,
                    apiKey: user.apiKey,
                    appId: user.appId,
                    templateId: user.templateId
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

exports.updateProfile = function (req, res) {
    User.findOneAndUpdate({username: req.body.username },req.body, {new:true},function (err, user) {
        if(err) {

            return res.json({success: false, msg: 'An error has occurred!'});
        } else {
            console.log(user);
            res.json({
                success: true,
                user: {
                    _id: user._id,
                    name: user.name,
                    username: user.username,
                    apiKey: user.apiKey,
                    appId: user.appId,
                    templateId: user.templateId
                }
            })
        }
    })
};
