//cmd prompt - npm install ejs; npm install express

var express = require("express");
var app = express();

// gets

//default root address and index page
app.get('/', function(request, response) {
  response.render('index');
});

app.get('/cars', function(request, response) {
  response.render('cars');
});

app.get('/cats', function(request, response) {
  response.render('cats');
});

app.get('/cars/new', function(request, response) {
  response.render('form');
});

// cat data to play with

var cats = {
  'jimmy':{
    id:1,
    img: 'cat1.jpg',
    name: 'Jimmy',
    food: 'spaghetti',
    age: '3',
    sleep_spots: ['sunlight', 'bed'],
  },
  'carl':{
    id:2,
    img: 'cat2.jpg',
    name: 'Carl',
    food: 'mice',
    age: '12',
    sleep_spots: ['outside', 'maybe more?'],
  },
  'lordDestroyer':{
    id:3,
    img: 'cat3.jpg',
    name: "Ra'Ghalish",
    food: 'human souls',
    age: 'older than time',
    sleep_spots: ['bed', 'table', 'void between dimensions'],
  },
};

//custom getter that pushes variables into ejs page

app.get('/details/:cat', function(request, response) {
  var cat = request.params.cat;
  console.log(cats[cat]);
  var context = cats[cat];
  response.render('details', {context: context});
});

// listener

app.listen(8000, function() {
  console.log('listening to port 8000');
});

// setter

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// uses

app.use(express.static(__dirname + '/static/images'));
