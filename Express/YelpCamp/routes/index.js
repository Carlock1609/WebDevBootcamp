let express = require('express');
let router = express.Router();
let passport = require('passport');
let User = require('../models/user');



// LANDING PAGE
router.get('/', function(req, res) {
    res.render('landing');
});


// ======
// AUTH ROUTES
// ======
router.get('/register', function(req, res) {
	res.render('register')
})

router.post('/register', function(req, res) {
	let newUser = new User({username: req.body.username})
	User.register(newUser, req.body.password, function(err, user) {
		if(err) {
			req.flash('error', err.message);
			return res.render('register');
		} else {
			passport.authenticate('local')(req, res, function() {
				req.flash('success', 'Successfully created account for ' + user.username);
				res.redirect('/campgrounds');
			});
		}
	});
});

// show login form
router.get('/login', function(req, res) {
	res.render('login');
});
router.post('/login', passport.authenticate('local', 
	{
		successRedirect: '/campgrounds',
		failureRedirect: '/login',
	}), function(req, res) {
});

// logout route
router.get('/logout', function(req, res) {
	req.logout()
	req.flash('success', 'Logged you out!');
	res.redirect('/campgrounds');
});



module.exports = router;



