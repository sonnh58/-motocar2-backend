var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
    name: String,
    apiKey: { type: String, default: "" },
    appId: { type: String, default: "" },
    templateId: { type: String, default: "" },
}, { collection: 'users' });

module.exports = mongoose.model('User', UserSchema);
