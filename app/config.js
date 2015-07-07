// config.js

var pjson = require('../package.json');
var priv  = require('./private.json');

module.exports = {
	version: pjson.version,
	connectionString: priv.connectionString,
	google: priv.google,
	twitter: priv.twitter,
	facebook: priv.facebook,
	port: 8080
};