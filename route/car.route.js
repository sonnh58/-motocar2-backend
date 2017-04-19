var car = require('../controller/car.controller'),
    passport = require('passport');

module.exports = function(app){

    //for mobile
    app.route('/api/getData').post(car.getData);
    app.route('/api/getOneCar').post(car.findOneCar);

    // for website
    app.post('/api/updateOneCar',passport.authenticate('jwt', { session: false }), car.updatedAfterNotified);
    app.post('/api/getCars',passport.authenticate('jwt', { session: false }), car.getCars);
    app.post('/api/requestCars',passport.authenticate('jwt', { session: false }), car.requestCars);
    app.post('/api/pushNotification',passport.authenticate('jwt', { session: false }), car.pushNotification);
};