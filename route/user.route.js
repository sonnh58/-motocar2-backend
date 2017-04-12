/**
 * Created by sonsi_000 on 4/11/2017.
 */
var user = require('../controller/user.controller'),
    passport = require('passport');
module.exports = function(app){
    app.route('/api/users/auth').post(user.authenticate);
};
