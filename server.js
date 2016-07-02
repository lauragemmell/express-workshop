var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
var outputFilename = __dirname + '/data/posts.json';

app.use(bodyParser.urlencoded({ extended: true }));

fs.readFile(outputFilename, function (error,file) {
	var parsedFile = JSON.parse(file);
	console.log(file.toString());
});





/*
app.get("/", function (req,res) {
	res.send("Yay Node Girls!")
});

app.get("/node", function (req,res) {
	res.send("This is my Node!")
});

app.get("/girls", function (req,res) {
	res.send("girls girls girls!")
});
*/

app.use(express.static("public"));

app.post('/create-post', function (req, res) {

	console.log(req.body.blogposts);

	var myData = {};

	blogTime = Date.now().toString();
	
	blogText = '\n' + req.body.blogposts; 

	console.log(blogTime + blogText);

	/*fs.appendFile(outputFilename, JSON.stringify(myData), function (error) {
	
	if(error) {
		return console.log(error);
	}

	console.log("Saved successfully");
});
*/
	res.redirect('/');
});







app.listen(3000,function () {
	console.log('Server is listening on port 3000. Ready to accept requests!');
});