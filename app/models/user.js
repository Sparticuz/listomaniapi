// Users.js
// This is the users Model

var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
	user: {type: String, unique: true, required: true},
	google: {
    	id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    avatar: String,
	created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Users',usersSchema);