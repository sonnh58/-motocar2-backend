var mongoose = require('mongoose'),
    config = require('../config/config'),
    path = require('path'),
    Car = mongoose.model('Car'),
    request = require('request-promise');

exports.findOneCar = function (req, res) {
    Car.findById(req.params.id, function(err, docs) {
        if (err) {
            res.json(err);
        } else {
            res.json(docs);
        }
    });
};

exports.getData = function (req, res) {
    Car.find(null, null ,{ limit:20, sort:{ _id: -1 }}, function(err, docs) {
        if (err) {
            res.json(err);
        } else {
            res.json(docs);
        }
    });
};

exports.pushNotification = function (req, res) {
    var _id = req.body._id;
    var message = { 
            app_id: "f9db5800-ac1d-4751-8ef0-4fee2dd546c3",
            template_id : "6ab466dc-28b9-48cb-ba22-a0770c7d2efe",
            data: {_id:_id},
               // include_player_ids: ['6be2e7b6-6bf6-4f49-ab47-18b63f9c74a6'],
            included_segments: ["All"]
        };

    var headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic " + config.onesignal_app_api_key
    };
      
    var options = {
        uri: config.onesignal_api_create_message,
        method: "POST",
        body: JSON.stringify(message),
        headers: headers
    };
      
    request(options)
        .then(function(response){
            console.log(response);
            Car.findByIdAndUpdate(req.body._id, {notified: 'Sent'}, function(err, docs) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(docs);
                }
    });
        })
        .catch(function(error){
            console.log(error);
        });
};

