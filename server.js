process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    config = require('./config/config'),
    express = require('./config/express'),
    request = require('request-promise'),
    parseString = require('xml2js').parseString,
    car = require('./model/car.model');

var db = mongoose(),
    app = express();

app.listen(config.port);
module.exports = app;


console.log(process.env.NODE_ENV + ' server running at http://localhost:' + config.port);
//automatic request then add to databse

function getData (req, res) {
	console.log(1);
    request('https://motorcars-intl.com/vehicleinventory/appfeed')
    	.then(function(response){
			var xml = response.replace('<?xml version="1.0" encoding="utf-8"?>', "");
			        parseString(xml, {explicitArray: false}, function (err, result) {
			            if (result['listings'].listing) {
			                var data = result['listings'].listing;
			                data.forEach(function(item) {
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
			});
    	})
    	.catch(function (err) {
        	// API call failed...
    	});
};

var createNotification = function(data) {
	
	var headers = {
		"Content-Type": "application/json; charset=utf-8",
		"Authorization": "Basic " + config.onesignal_app_api_key
	};
	  
	var options = {
	    uri: config.onesignal_api_create_message,
	    method: "POST",
	    body: JSON.stringify(data),
	    headers: headers
	};
	  
	  
	request(options)
		.then(function(response){
			console.log(response);
		})
		.catch(function(error){
			console.log(error);
		});
}

getData();
setInterval(getData, config.time_request_inteval); 


