// Users.js
// This is the users Model

var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
	user: {type: String, unique: true, required: true},
	twitter_handle: {type: String, unique: true, required: true},
	twitter_id: {type: Number, unique: true, required: true},
	avatar: String,
	created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Users',usersSchema);