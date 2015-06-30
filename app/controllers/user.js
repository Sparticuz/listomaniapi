// User.js
// This is the user controller

var User = require('../models/user');
var express = require('express');
var router = express.Router();

router.route('/user')
	.get(function(req,res,next){
		//Retrieves all users
		console.log('GET /user');
		res.send('{test:test}');
		next();
	})
	.post(function(req,res,next){
		//Invalid, return error
		console.log('POST /user');
		next();
	})
	.put(function(req,res,next){
		//Add's new user
		console.log('PUT /user');
		next();
	})
	.delete(function(req,res,next){
		//Invalid, return error
		console.log('DELETE /user');
		next();
	});

router.route('/user/:id')
	.get(function(req,res,next){
		//Retrieves single user
		console.log('GET /user');
		res.send('{test:test}');
		next();
	})
	.post(function(req,res,next){
		//Updates a single user
		console.log('POST /user');
		next();
	})
	.put(function(req,res,next){
		//Invalid, return error
		console.log('PUT /user');
		next();
	})
	.delete(function(req,res,next){
		//Deletes single user
		console.log('DELETE /user');
		next();
	});

module.exports = router;