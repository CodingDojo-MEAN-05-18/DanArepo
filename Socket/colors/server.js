var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.sendfile('index.html');
});

var color = 'white';

io.on('connection', function(socket){
    console.log('conn check; bgcolor: ' + color);
    socket.emit('curBGcolor', {color: color});

    socket.on('bgColor', function(data){
        console.log('bgcolor: ' + data.color);
        io.emit('updateAll', data);
    });

    socket.on('redPressed', function(data){
        console.log(data.color + ' pressed');
        io.emit('updateAll', data);
        color = data.color;
    });

    socket.on('bluePressed', function(data){
        console.log(data.color + ' pressed');
        io.emit('updateAll', data);
        color = data.color;
    });

    socket.on('greenPressed', function(data){
        console.log(data.color + ' pressed');
        io.emit('updateAll', data);
        color = data.color;
    });

    socket.on('disconnect', function(){
        console.log('user disconnect');
    })
});



http.listen(3000, function(){
    console.log('Listening on port 3000');
  }); 