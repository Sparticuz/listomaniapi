// authenticate.js
// authenticates the user with a twitter backend (for now)

var express = require('express');
var router = express.Router();
var config = require('../config');
var User = require('../models/user');
var jwt = require('jsonwebtoken');

var passport = require('passport');

//Google Strategy
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.use(new GoogleStrategy({
    clientID: config.google.client_id,
    clientSecret: config.google.client_secret,
    callbackURL: config.google.callback_url
  },
  function(accessToken, refreshToken, profile, done) {
  	//Check the user table for this user
  	User.findOne({
  		'google.id': profile.id
  	}, function (err, user) {
  		if (err) { return done(err); }
  		//No user found!, create one!
  		if (!user) {
  			user = new User({
  				user: profile.username || profile.displayName.replace(/\s+/g,''),
				google: {
    				id : profile.id,
        			token : accessToken,
        			displayName : profile.displayName,
        			username : profile.username
    			},
    			avatar: profile.photos[0].value,
  			});
  			user.save(function(err){
 				if (err) console.log(err);
                return done(err, user);
  			});
  		} else {
  			//User found!
  			return done(err, user);
  		}
    });
  }));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

router.route('/authenticate/google')
	.get(passport.authenticate('google', {
		session:false,
		scope: ['profile','email']
	}),function(req,res){
		// The request will be redirected to Google for authentication, so this
    // function will not be called.
	});

router.route('/authenticate/google/callback')
	.get(passport.authenticate('google', {
		failureRedirect:'/login'
	}), function(req,res){
		res.redirect('http://127.0.0.1:9000/#login/'+jwt.sign({
				_id: req.user._id,
				user: req.user.user,
				admin: req.user.admin
			},config.jwt_secret,{
				expiresIn: 86400
			}));
	});

module.exports = router;
