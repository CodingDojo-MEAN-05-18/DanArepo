//create a project folder
//go to the cmd prompt
//npm init -y
//this creates a default package.json file that displays info on the project
/** it should look something like This
{
  "name": "TestProject",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
              "test": "echo \"Error: no test specified\" && exit 1"
              },
  "keywords": [],
  "author": "",
  "license": "ISC"
  }
**/

//in powershell
//npm install Express --save
//npm install ejs --save
//npm install body-parser --save

/** package.json should have changed to
{
  "name": "TestProject",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.15.0",
    "ejs": "^2.4.1",
    "express": "^4.13.4"
  }
}
**/

//to easily start a new project, copy the dependencies section to the new project's package.json file
//then type npm install in the shell
//without any params, npm will check the package file for what to install


// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
//body-parser requirement for gettring post data
var bodyParser = require('body-parser');
//Session requirement
var session = require('express-session');


//console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
//console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
   //console.log("The request object", request);
   //console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   //response.send("<h1>Hello Express</h1>");
   response.render('index');
})

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

// POST, GET, SESSION

/** in routing the code looks like this
app.HTTP_VERB('URL', function(request, response){
  insert code here
});**/

//more specifically like this
// this is how you get GET data, from the url
app.get('/somewhere/:var', function (request, response){
  // :variable_name translates to request.params.variable_name to use it
  var a = request.params.var;
  response.send('You requested ' + a + ' with GET');
});
//And with POST
app.post('/create', function(request, response){
  //secure code goes here
  console.log('post data: \n\n', request.body);
  response.redirect('/');
});

//gettin data from post requires an install of bodyparser
//check the top for the list of requires
//check the use section for how to implement it

//Session Data
//not reccomended for use as with proper GET and POST usage
//you don't really need this as it creates too much needless resource usage

//this also requires you to install a new package: express-session
//after that, put it in the requires section and again in the use section so it can be avaiable to the app



// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
console.log(__dirname);

//here's the body-parser use code so it can actually be used in this app
app.use(bodyPaser.urlencoded({extended: true}));

//session use
app.use(session({
  secret: 'something',
  resave: false,
  saveUnitialized: true,
  cookie: { maxAge: 60000 },
}));
// to use in code
// the var name is request.session.'whatever variable you want'
//you can use that in any routes

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');


// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})
