// Users.js
// This is the users controller

var User = require('../models/user');
var express = require('express');
var router = express.Router();

router.route('/users')
	.get(function(req,res){
		//Retrieves all users
		User.find(function(err,users){
			if (err) return res.send(err);
			res.json(users);
		});
	})
	.post(function(req,res){res.status(405).send('Please select a user before updating one');})
	.put(function(req,res){
		//Add's new user
		console.log(req.body);
		var user = new User();
		user.user = req.body.user;
		user.twitter = req.body.user;
		user.avatar = req.body.avatar;
		user.save(function(err){
			if (err) return res.send(err);
			console.log('PUT /users');
			res.status(201).send();
		});
	})
	.delete(function(req,res){res.status(405).send('Cannot DELETE All users. Please select a user.');
	});

router.route('/users/:id')
	.get(function(req,res){
		//Retrieves single user
		User.findById(req.params.id,function(err,user){
			if (err) return res.send(err);
			console.log('GET /users');
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