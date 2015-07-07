// lists.js
// This is the Lists controller

var List = require('../models/list');
var express = require('express');
var router = express.Router();

router.route('/lists')
	.post(function(req,res){res.status(405).send('Please select a list');})
	.put(function(req,res){
		//Add's new list
		console.log(req.body);
		var list = new List();
		list.owner = req.body.owner;
		list.title = req.body.title;
		list.save(function(err){
			if (err) return res.send(err);
			console.log('PUT /lists');
			res.status(201).send();
		});
	})
	.delete(function(req,res){res.status(405).send('Cannot DELETE All lists. Please select a list.');
	});

router.route('/lists/:id')
	.post(function(req,res){
		//TODO: Updates a single list
		console.log('POST /lists');
	})
	.put(function(req,res){res.status(405).send('Cannot PUT a new list onto an existing list, Please use PUT /lists');})
	.delete(function(req,res){
		//Deletes single list
		List.findByIdAndRemove(req.body.id,function(err){
			if (err) return res.send(err);
			console.log('DELETE /lists');
			res.status(201).send();
		});
	});

module.exports = router;