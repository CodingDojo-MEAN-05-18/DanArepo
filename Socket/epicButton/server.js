var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
  res.sendfile('index.html');
});
var btnClicks = 0;

io.on('connection', function(socket){
  console.log('conn check');
  socket.on('clickEvent', function(data){
    console.log('btn check');
    btnClicks++;
    io.sockets.emit('broadcast', { number : btnClicks });
  });

  socket.on('reset', function(data){
    console.log('reset check');
    btnClicks = 0;
    io.sockets.emit('broadcast', {number : btnClicks });
  });

  socket.on('disconnect', function(){
    console.log('disconn check');
  });
});

http.listen(3000, function() {
   console.log('listening on *:3000');
});
