// me
// This will return the current logged in user

var User = require('../models/user');
var express = require('express');
var router = express.Router();

router.route('/me')
	.get(function(req,res){
		//Retrieves current user
		User.findById(req.decoded._id,function(err,user){
				if (err) return res.send(err);
				console.log('GET /me');
				res.json(user);
		});
	})
	.post(function(req,res){
		//TODO: Updates a single user
		console.log('POST /users');
	})
	.put(function(req,res){res.status(405).send('Cannot PUT a new user onto an existing user, Please use PUT /users');})
	.delete(function(req,res){
		//Deletes single user
		User.findByIdAndRemove(req.params.id,function(err){
			if (err) return res.send(err);
			res.status(204).send();
		});
	});

module.exports = router;