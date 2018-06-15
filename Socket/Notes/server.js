var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
   res.sendfile('index.html');
});

//broadcasting
// its when you send a message to all connected users in a given place
var clients = 0;
//we'll broadcast how many ppl are connected to the server so first set a variable for it

io.on('connection', function(socket){
  console.log('a user connected');

  clients++;
  //io.sockets.emit('broadcast', { description : clients + ' clients connected'});//this broadcasts to all browsers
  socket.emit('newclientconnect', { description : 'Hey, welcome!'});//this sends a message to the current browser
  socket.broadcast.emit('newclientconnect', {description: clients + ' clients connected'});//this sends a message to everyother browser also connected


  //this code will handle events from the client/browser
  // socket.on('clientEvent', function(data){
  //   console.log(data);
  // });

  //this sends a message after 4 seconds
  // setTimeout(function(){
  //   socket.send('this msg was sent 4 sec after you loaded the page');
  // }, 4000);

//now with an emitter
// setTimeout(function(){
//   socket.emit('testerEvent', { description: 'A custom event named testerEvent'});
// }, 4000);

  socket.on('disconnect', function(){
    console.log('a user disconnected');
    clients--;
    //io.sockets.emit('broadcast', { description : clients + ' clients connected!'});//broadcast to all browsers
    socket.broadcast.emit('newclientconnect', { description: clients + ' clients connected'});//broadcasts to everyother browsers
  });
});

http.listen(3000, function() {
   console.log('listening on *:3000');
});
/**
Everything above is basic server code
**/
