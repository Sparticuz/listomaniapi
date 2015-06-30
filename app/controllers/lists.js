// lists.js
// This is the Lists controller

var Lists = require('../models/lists');
var express = require('express');
var router = express.Router();

router.route('/lists')
	.get(function(req,res,next){
		//Retrieves all lists
		console.log('GET /lists');
		res.send('{test:test}');
		next();
	})
	.post(function(req,res,next){
		//Invalid, return error
		console.log('POST /lists');
		next();
	})
	.put(function(req,res,next){
		//Add's new list
		console.log('PUT /lists');
		next();
	})
	.delete(function(req,res,next){
		//Invalid, return error
		console.log('DELETE /lists');
		next();
	});

router.route('/lists/:id')
	.get(function(req,res,next){
		//Retrieves single list
		console.log('GET /lists');
		res.send('{test:test}');
		next();
	})
	.post(function(req,res,next){
		//Updates a single list
		console.log('POST /lists');
		next();
	})
	.put(function(req,res,next){
		//Invalid, return error
		console.log('PUT /lists');
		next();
	})
	.delete(function(req,res,next){
		//Deletes single list
		console.log('DELETE /lists');
		next();
	});

module.exports = router;