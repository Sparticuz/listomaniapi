// Users.js
// This is the users controller

var Users = require('../models/user');
var express = require('express');
var router = express.Router();

router.route('/users')
	.get(function(req,res,next){
		//Retrieves all users
		console.log('GET /users');
		res.send('{test:test}');
		next();
	})
	.post(function(req,res,next){
		//Invalid, return error
		console.log('POST /users');
		next();
	})
	.put(function(req,res,next){
		//Add's new user
		console.log('PUT /users');
		next();
	})
	.delete(function(req,res,next){
		//Invalid, return error
		console.log('DELETE /users');
		next();
	});

router.route('/users/:id')
	.get(function(req,res,next){
		//Retrieves single user
		console.log('GET /users');
		res.send('{test:test}');
		next();
	})
	.post(function(req,res,next){
		//Updates a single user
		console.log('POST /users');
		next();
	})
	.put(function(req,res,next){
		//Invalid, return error
		console.log('PUT /users');
		next();
	})
	.delete(function(req,res,next){
		//Deletes single user
		console.log('DELETE /users');
		next();
	});

module.exports = router;