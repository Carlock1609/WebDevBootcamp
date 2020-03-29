let express = require('express');
let app = express();

// '/' -> hello
app.get('/', function(req, res){ 
    res.send('Hi there!');
});

// '/bye' -> bye
app.get('/goodbye', function(req, res) {
    res.send('Goodbye!');
});
// '/dog' -> meow
app.get('/dog', function(req, res) {
    console.log('Someone made a request!')
    res.send("Meow!");
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log('Server has started!!');
});