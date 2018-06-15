var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('socket check');
  socket.on('clickEvent', function(data){
    console.log('post check');
    console.log(data);
    var number = Math.round((Math.random() * 1000) + 1);
    socket.emit('updated_message', { description: data});
    socket.emit('random_number', { number: number});
  })
});



const port = 8000;
http.listen(port, function(){
  console.log('Listening on port ' + port );
});
