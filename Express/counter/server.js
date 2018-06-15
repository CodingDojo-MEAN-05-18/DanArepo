// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
var count = 0;
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
  count++;
  req.body.count = count;
  res.render("index", {count: req.body.count});
});
app.post('/count', function(req, res){
  count += parseInt(req.body.number) - 1;
  res.redirect('/');
});
app.post('/reset', function(req, res){
  count = -1;
  res.redirect('/');
});
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
