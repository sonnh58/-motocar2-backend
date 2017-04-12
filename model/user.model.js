var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
    name: String
}, { collection: 'users' });

module.exports = mongoose.model('User', UserSchema);
