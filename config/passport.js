/**
 * Created by sonsi_000 on 4/11/2017.
 */
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    user = require('../controller/user.controller'),
    

    config = require('./config');

module.exports  = function(passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('Bearer');
    opts.secretOrKey = config.secretKey;

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        user.getUserbyId(jwt_payload._doc._id, function (err, user) {
            if(err) {
                return done(err, false);
            }

            if(user){
                return done(null, user);
            } else{
                return done(null, false);
            }
        })
    }))

};
