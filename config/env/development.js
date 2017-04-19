var port = 8000;

module.exports = {
    port: process.env.PORT || port,
    db: 'mongodb://localhost/motocars' || 'mongodb://sonnh58:123456789@ds157320.mlab.com:57320/motocars',
    onesignal_api_create_message: 'https://onesignal.com/api/v1/notifications',
    time_request_inteval : 1000*60*10, //miliseconds,
    secretKey : "nguyenhongson"
};