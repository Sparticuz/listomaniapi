// server.js

// BASE SETUP
// Load the packages we need
var express    = require('express');        // call express
var bodyParser = require('body-parser');
var app        = express();                 // define our app using express
var config     = require('./config');
app.set('port',process.env.PORT || config.port);   // set our port
var passport = require('passport');
var jwt = require('jsonwebtoken');
var morgan = require('morgan');

// Load the Mongoose connection
var mongoose = require('mongoose');
mongoose.connect(config.connectionString);

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());

// middleware to use for all requests
app.use(morgan('dev'));
app.use(function(req, res, next) {
    // Allow CORS
    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
app.get('/api', function(req, res) {
    res.json({
    	listomania: 'hooray! welcome to our api!',
    	version: config.version
    });
});

// REGISTER OUR ROUTES/Endpoints -------------------------------
// Load the Controllers
var authenticate = require('../app/controllers/authenticate');
var publicLists = require('../app/controllers/publicLists');
var lists = require('../app/controllers/lists');
var users = require('../app/controllers/users');
// all of our routes will be prefixed with /api
app.use('/api', authenticate);
app.use('/api', publicLists);
//Auth verify
app.use('/api', function(req,res,next){
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token,config.secret,function(err,decoded){
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: "Failed to authenticate token."
                });
            } else {
                //Token Authenticated!
                req.decoded = decoded;
                //return res.send(decoded);
                next();
            }
        });
    } else {
        return res.status(401).json({
            success: false,
            message: "No token provided."
        })
    }
});
//Authenticated routes
app.use('/api', lists);
app.use('/api', users);

// START THE SERVER
// =============================================================================
app.listen(app.get('port'));
console.log('Magic happens on port ' + app.get('port'));