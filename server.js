var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require("./middleware.js");


//application level middleware, anything below this will be within the middleware mentioned below
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

/*app.get('/', function (req, res) {
	res.send("Hello Express!");
});*/

/*app.get('/about', function (req, res) {
	res.send("<H1>About Us!</H1><br><h3>This is to test About Us!!!</h3>");
});*/

//route level middleware, by adding the middleware
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send("<H1>About Us!</H1><br><h3>This is to test About Us!!!</h3>");
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function () {
	console.log("Express server started at " + PORT + " !!!");
});
