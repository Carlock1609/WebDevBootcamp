let express = require('express');
let router = express.Router()
let Campground = require('../models/campground')
let middleware = require('../middleware')




// INDEX ROUTE
router.get('/', function(req, res) {
	console.log(req.user)
	Campground.find({}, function(err, allCampgrounds) {
		if(err) {
			console.log(err)
		} else {
			res.render('campgrounds/index', {campgrounds: allCampgrounds, currentUser: req.user});
		}
	})
});

// CREATE ROUTE
router.post('/', middleware.isLoggedIn, function(req, res) {
    let name = req.body.name;
	let price = req.body.price;
    let image = req.body.image;
	let desc = req.body.description;
	let author = {
		id: req.user._id,
		username: req.user.username,
	}
	let newCampground = {name: name, price: price, image: image, description: desc, author: author}
		
	Campground.create(newCampground, function(err, newlyCreated) {
		if(err) {
			console.log(err)
		} else {
			 res.redirect('/campgrounds');
		}
	});
    // campgrounds.push(context);
});

// NEW FORM ROUTE
router.get('/new', middleware.isLoggedIn, function(req, res) {
   res.render('campgrounds/new');
});


// SHOW ROUTE
router.get('/:id', function(req, res) {
	Campground.findById(req.params.id).populate('comments').exec(function(err, foundCampground){
		if(err) {
			console.log(err);
		} else {
			// console.log(foundCampground)
			res.render('campgrounds/show', {campground: foundCampground});
		}
	})
});

// EDIT CAMPGROUND ROUTE
router.get('/:id/edit', middleware.checkCampgroundOwnership, function(req, res) {
		Campground.findById(req.params.id, function(err, foundCampground) {
			res.render('campgrounds/edit', {campground: foundCampground});
		});			
});

//  UPDATE CAMPGROUND ROUTE
router.put('/:id', middleware.checkCampgroundOwnership, function(req, res) {
	// find and update corect campground
	
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground) {
		if(err) {
			res.redirect('/campgrounds');
			
		} else {
			res.redirect('/campgrounds/' + req.params.id);
		}
	});
});

// DESTROY CAMPGROUND ROUTE
router.delete('/:id', middleware.checkCampgroundOwnership, function(req, res) {
	Campground.findByIdAndRemove(req.params.id, function(err) {
		if(err) {
			res.redirect('/campgrounds');
		} else {
			res.redirect('/campgrounds');
		}
	});
});





module.exports = router;

