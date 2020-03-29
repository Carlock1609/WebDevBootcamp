let mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/blog_demo', { 
													useNewUrlParser: true,
													useUnifiedTopology: true,
														});


// USER -emails, name
let postSchema = new mongoose.Schema({
	title: String,
	content: String,
});

let Post = mongoose.model('Post', postSchema);

let userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
});

let User = mongoose.model('User', userSchema);


// let newUser = new User({
// 	email: 'boobbyyyy@udem.com',
// 	name: 'Bob hope',
// });

// newUser.posts.push({
// 	title: 'Reading books',
// 	content: 'blah blah blah',
// });

// newUser.save(function(err, user) {
// 	if(err) {
// 		console.log(err)
// 	} else {
// 		console.log(user)
// 	}
// });

// let newPost = new Post({
// 	title: 'Reflections on Apples',
// 	content: 'They are delicious',
// });

// newPost.save(function(err, post) {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

User.findOne({name: 'Charlie Brown'}, function(err, user) {
	if(err) {
		console.log(err)
	} else {
		user.posts.push({
			title: '3 things ia hate',
			content: 'voldemeort',
		})
		user.save(function(err, user) {
			if(err) {
				console.log(err)
			} else {
				console.log(user)
			}
		})
	}
})



