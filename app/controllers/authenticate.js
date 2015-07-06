// authenticate.js
// authenticates the user with a twitter backend (for now)

var express = require('express');
var router = express.router();
var passport = require('passport');
var config = require('../config');

router.route('/authenticate/twitter')
	.get(function(req,res){
		var TwitterStrategy = require('passport-twitter').Strategy;
	});