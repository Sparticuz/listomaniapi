//List's
// This is the List Model

var mongoose = require('mongoose');

var listSchema = new mongoose.Schema({
	owner: String,
	title: String,
	items: [{
		title: String,
		subTitle: String,
		comment: String,
		order: Number,
		attributes: [{
			link: String,
			type: String
			/* Types: image, primaryColor, secondaryColor, rdio, spotify */
		}]
	}],
	shortUrl: String,
	date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('List',listSchema);