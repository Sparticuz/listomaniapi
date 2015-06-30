// list.js
// This is the List controller

var List = require('../models/list');
var express = require('express');
var router = express.Router();

router.route('/list')
	.get(function(req,res,next){
		//Retrieves all lists
		console.log('GET /list');
		res.send('{test:test}');
		next();
	})
	.post(function(req,res,next){
		//Invalid, return error
		console.log('POST /list');
		next();
	})
	.put(function(req,res,next){
		//Add's new list
		console.log('PUT /list');
		next();
	})
	.delete(function(req,res,next){
		//Invalid, return error
		console.log('DELETE /list');
		next();
	});

router.route('/list/:id')
	.get(function(req,res,next){
		//Retrieves single list
		console.log('GET /list');
		res.send('{test:test}');
		next();
	})
	.post(function(req,res,next){
		//Updates a single list
		console.log('POST /list');
		next();
	})
	.put(function(req,res,next){
		//Invalid, return error
		console.log('PUT /list');
		next();
	})
	.delete(function(req,res,next){
		//Deletes single list
		console.log('DELETE /list');
		next();
	});

module.exports = router;