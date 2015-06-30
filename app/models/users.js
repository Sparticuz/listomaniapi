// Users.js
// This is the users Model

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var usersSchema = new Schema({
	id: String,
	owner: String,
	avatar: String,
	title: String,
	items: [{
		title: String,
		subTitle: String,
		comment: String,
		order: Number,
		data: [{
			link: String,
			type: String
			/* Types: image, primaryColor, secondaryColor, rdio, spotify */
		}]
	}],
	shortUrl: String,
	date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Users',usersSchema);