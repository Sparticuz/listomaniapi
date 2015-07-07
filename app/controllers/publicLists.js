// publicLists.js
// lists.js
// This is the Lists controller

var List = require('../models/list');
var express = require('express');
var router = express.Router();

router.route('/lists')
	.get(function(req,res){
		//Retrieves all lists
		List.find(function(err,lists){
			if (err) return res.send(err);
			res.json(lists);
		});
	});

router.route('/lists/:id')
	.get(function(req,res){
		//Retrieves single list
		List.findById(req.params.id,function(err,list){
			if (err) return res.send(err);
			res.json(list);
		});
	});

module.exports = router;