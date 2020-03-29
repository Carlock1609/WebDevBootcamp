let express = require('express');
let mongoose = require('mongoose');
let passport = require('passport');
let bodyParser = require('body-parser');
let User = require('./models/user')
let LocalStrategy = require('passport-local');
let passportLocalMongoose = require('passport-local-mongoose');
let app = express();

mongoose.connect('mongodb://localhost:27017/auth_demo_app', { 
													useNewUrlParser: true,
													useUnifiedTopology: true,
														});
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('express-session')({
	secret: 'homeschool',
	resave: false,
	saveUninitialized: false,
}));

app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// ==========
// ROUTES
// ==========


app.get('/', function(req, res) {
	res.render('home');
});


app.get('/secret', isLoggedIn, function(req, res) {
	res.render('secret');
});

// =====
// AUTH ROUTES
// =====

app.get('/register', function(req, res) {
	res.render('register');
});

app.post('/register', function(req, res) {
	req.body.username
	req.body.password
	User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
		if(err) {
			console.log(err);
			return res.render('register');
		} else {
			passport.authenticate('local')(req, res, function() {
				res.redirect('/secret');
			});
		}
	});
});

// ===
// LOGIN ROUTES
// ===
app.get('/login', function(req, res) {
	res.render('login');
});


// MIDDLEWARE EXAMPLE
app.post('/login', passport.authenticate('local', {
	successRedirect: '/secret',
	failureRedirect: '/login',
}), function(req, res) {
	
});


app.get('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});



function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}		
	res.redirect('/login');
};





app.listen(3000, function() {
	console.log('SERVER UP');
});





