var car = require('../controller/car.controller'),
    passport = require('passport');

module.exports = function(app){
    app.route('/api/getData').post(car.getData);
    app.route('/api/getOneCar').post(car.findOneCar);
    app.post('/api/updateOneCar',passport.authenticate('jwt', { session: false }), car.updatedAfterNotified);
    app.post('/api/getCars',passport.authenticate('jwt', { session: false }), car.getData);
    app.post('/api/pushNotification',passport.authenticate('jwt', { session: false }), car.pushNotification);
};