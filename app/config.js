// config.js

var pjson = require('../package.json');

module.exports = {
	version: pjson.version,
	connectionString: process.env.MONGO_CONNECTION_STRING,
	google: {
		client_id: process.env.GOOGLE_CLIENT_ID,
		client_secret: process.env.GOOGLE_CLIENT_SECRET,
		callback_url: process.env.NODE_ENV == 'production' ? 'https://listomaniapi.herokuapp.com/api/authenticate/google/callback' : 'http://127.0.0.1:8080/api/authenticate/google/callback'
	},
	jwt_secret: process.env.JWT_SECRET,
	port: 8080
};
