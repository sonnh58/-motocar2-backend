var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    sourceData: { type: String, default: "" },
    apiKey: { type: String, default: "" },
    appId: { type: String, default: "" },
    templateId: { type: String, default: "" },
    isAdmin: { type: Number, default: 0 }
},{timestamps: true}, { collection: 'users' });

module.exports = mongoose.model('User', UserSchema);
