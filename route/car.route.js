var car = require('../controller/car.controller'),
    passport = require('passport');

module.exports = function(app){
    app.route('/api/getData').post(car.getData);
    app.route('/api/getData/:id').post(car.findOneCar);
    app.post('/api/getCars',passport.authenticate('jwt', { session: false }), car.getData);
    app.post('/api/pushNotification',passport.authenticate('jwt', { session: false }), car.pushNotification);
};