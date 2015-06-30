// server.js

// BASE SETUP
// =============================================================================

// Load the packages we need
var express    = require('express');        // call express
var bodyParser = require('body-parser');
var app        = express();                 // define our app using express
var config     = require('./config');
app.set('port',process.env.PORT || 8080);   // set our port

// Load the Mongoose connection
var mongoose = require('mongoose');
mongoose.connect(config.connectionString);

// Load the Controllers
var list = require('../app/controllers/list');
var user = require('../app/controllers/user');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// middleware to use for all requests
app.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
app.get('/api', function(req, res) {
    res.json({
    	listomania: 'hooray! welcome to our api!',
    	version: config.version
    });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', list);
app.use('/api', user);

// START THE SERVER
// =============================================================================
app.listen(app.get('port'));
console.log('Magic happens on port ' + app.get('port'));