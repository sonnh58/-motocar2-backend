var mongoose = require('mongoose'),
    config = require('../config/config'),
    path = require('path'),
    Car = mongoose.model('Car'),
    request = require('request-promise');

exports.findOneCar = function (req, res) {
    var _id = req.body._id;
    Car.findById(_id, function(err, docs) {
        if (err) {
            res.json(err);
        } else {
            res.json(docs);
        }
    });
};
exports.getData = function (req, res) {
    Car.find({username:'motocars'}, null ,{ limit:20, sort:{ _id: -1 }}, function(err, docs) {
        if (err) {
            res.json(err);
        } else {
            res.json(docs);
        }
    });
};

exports.getCars = function (req, res) {
    var username = req.user.username;
    if (req.user.isAdmin == 1) {
        Car.find(null, null ,{ sort:{ _id: -1 }}, function(err, docs) {
            if (err) {
                res.json(err);
            } else {
                res.json(docs);
            }
        });
    } else {
        Car.find({username: username}, null ,{ sort:{ _id: -1 }}, function(err, docs) {
            if (err) {
                res.json(err);
            } else {
                res.json(docs);
            }
        });
    }

};

request.requestCars = function () {
    var sourceData = req.user.sourceData;
    if (sourceData != "") {
        request(value.sourceData)
            .then(function(response){
                var xml = response.replace('<?xml version="1.0" encoding="utf-8"?>', "");
                parseString(xml, {explicitArray: false}, function (err, result) {
                    if (result['listings'].listing) {
                        var data = result['listings'].listing;
                        data.forEach(function(item) {
                            item.username = value.username;
                            car.update({record_id : item.record_id}, item, {upsert:true, setDefaultsOnInsert:true}, function(err, doc) {
                                //     if (err) {
                                //         //console.log(err);
                                //     } else {
                                //     	//n:1 , nModified: 0, upserted [{index:0, _id:58e5as1fsafa}], ok: 1
                                //         if (doc.upserted) {
                                //         	//tạo notification
                                //         	var after = new Date();
                                // 	after.setHours(after.getHours() + 2);

                                // var message = {
                                // 	  app_id: "f9db5800-ac1d-4751-8ef0-4fee2dd546c3",
                                // 	  template_id : "6ab466dc-28b9-48cb-ba22-a0770c7d2efe",
                                // 	  data: doc.upserted[0],
                                // 	  include_player_ids: ['6be2e7b6-6bf6-4f49-ab47-18b63f9c74a6],
                                // 	  // send_after: after.toString(),
                                // 	  //included_segments: ["All"]
                                // 	};
                                //         	createNotification(message);
                                //         }
                                //     }
                            });
                        })
                    }

                    res.json({
                        success: true
                    })
                });
            })
            .catch(function (err) {
                // API call failed...
                res.json({
                    success: false,
                    msg: "Please check connection to data source !"
                })
            });
    } else {
        res.json({
            success: false
        })
    }
};

exports.updatedAfterNotified = function (req, res) {
    var _id = req.body._id;
    Car.findByIdAndUpdate(_id, {notified: 'Sent'}, function(err, docs) {
        if (err) {
            res.json({
                success: false
            })
        } else {
            res.json({
                success: true
            })
        }
    })
};


exports.pushNotification = function (req, res) {
    var _id = req.body._id;
    var user = req.user
    var message = {
            app_id: user.appId ,
            template_id: user.templateId ,
            data: {_id:_id},
               // include_player_ids: ['6be2e7b6-6bf6-4f49-ab47-18b63f9c74a6'],
            included_segments: ["All"]
        };

    var headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic " + user.apiKey
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

