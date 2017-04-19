var mongoose = require('mongoose'),
    path = require('path'),
    User = mongoose.model('User'),
    config = require('../config/config'),
    jwt = require('jsonwebtoken');

exports.authenticate = function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username}, function (err, user) {
        if(err) throw err;
        if(!user) {
            return res.json({success: false, msg: 'User not found'});
        }
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
                    templateId: user.templateId,
                    isAdmin : user.isAdmin,
                    sourceData : user.sourceData
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

exports.register = function(req, res) {
    var newUser = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    });

    User.findOne({username: newUser.username}, function (err, user) {
        if(err) throw err;
        if(user) {
            return res.json({success: false, msg: 'Username is already exist!'});
        } else {
            newUser.save(function (err, user) {
                if(err) {
                    res.json({success: false, msg: 'Failed to resister user!'});
                } else {
                    res.json({success: true, msg: 'User registered!'});
                }
            });
        }
    });
};

exports.getUserbyUsername = function (username, callback) {
    User.find({username: username}, callback);
};

exports.getUserbyId = function (id, callback) {
    User.findById(id, callback)
};

exports.getUsers = function (req, res) {
    console.log(req.user);
    if(req.user.isAdmin) {
        User.find(function (error, users) {
            if(error) {
                res.json({
                    success: false
                })
            } else {
                res.json({
                    success: true,
                    data: users
                })
            }

        });
    } else {
        res.json({
            success: false
        })
    }

};

exports.updateProfile = function (req, res) {
    User.findOneAndUpdate({username: req.body.username },req.body, {new:true},function (err, user) {
        if(err) {
            return res.json({success: false, msg: 'An error has occurred!'});
        } else {
            res.json({
                success: true,
                user: {
                    _id: user._id,
                    name: user.name,
                    username: user.username,
                    apiKey: user.apiKey,
                    appId: user.appId,
                    templateId: user.templateId,
                    isAdmin : user.isAdmin,
                    sourceData : user.sourceData
                }
            })
        }
    })
};
