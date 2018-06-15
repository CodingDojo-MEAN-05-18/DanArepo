var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

/** have node render an index.ejs when the client hits root */

//in browser, have it ask for a name

//have the client emit the name to 'name' in server

//have the server listen for this event

//have it broadcast the new user to all users

//have the server emit the existing users to the client

//have client listen for new user broadcast

//have the client render this info

// have the server listen for a disconnect event

//broadcast an event that the user has disconnected

//have client listen for event that user has disconnected

//remove the proper jquery box for that user

http.listen(3000, function(){
  console.log('Listening on port 3000');
});
