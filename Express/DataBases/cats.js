let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cat_app', { 
													useNewUrlParser: true,
													useUnifiedTopology: true,
														});


let catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String,
});

let Cat = mongoose.model('Cat', catSchema);

// let george = new Cat({
// 	name: 'Norris',
// 	age: 7,
// 	temperament: 'Evil',
// });

// george.save(function(err, cat) {
// 	if(err) {
// 		console.log('Something went wrong!!');
// 	} else {
// 		console.log('WE JUST SAVED A CAT!');
// 		console.log(cat);
// 	}
// });

Cat.create({
	name: 'Bob',
	age: 15,
	temperament: 'Nice',
}, function(err, cat) {
	if(err) {
		console.log(err);
	} else {
		console.log(cat);
	}
});


Cat.find({}, function(err, cats){
	if(err) {
		console.log('OH NO');
		console.log(err);
	} else {
		console.log('ALL CATS...');
		console.log(cats);
	}
});