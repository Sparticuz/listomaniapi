// config.js

var pjson = require('../package.json');

module.exports = {
	version: pjson.version,
	connectionString: process.env.MONGO_CONNECTION_STRING,
	google: {
		client_id: process.env.GOOGLE_CLIENT_ID,
		client_secret: process.env.GOOGLE_CLIENT_SECRET
	},
	jwt_secret: process.env.JWT_SECRET,
	port: 8080
};
