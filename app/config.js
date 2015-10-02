// config.js

var pjson = require('../package.json');

module.exports = {
	version: pjson.version,
	connectionString: process.env.connectionString,
	google: {
		client_id: process.env.google_client_id,
		client_secret: process.env.google_client_secret
	},
	port: 8080
};
