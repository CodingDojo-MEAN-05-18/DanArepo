var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.sendfile('index.html');
});

var users = [];
var index = 0;
var userExists = false;

io.on('connection', function(socket){
    console.log('conn check');
    io.emit('updateUserList', {users: users});

    socket.on('newUserIncoming', function(data){
        console.log('User: ' + data.user);
        for( let i = 0; i < users.length; i++){
            console.log('checking ' + i);
            if(users[i] === data.user){
                console.log('user exists');
                socket.emit('Error', {error : 'User exists'});
                userExists = true;
            }
        }
        if(!userExists){
            users.push(data.user);
            index = users.indexOf(data.user);
            console.log(users[index]);
            socket.emit('newUserCreated', {userID: index, username: users[index]});
            io.emit('updateUserList', {users: users});
        }
    });

    socket.on('textIncoming', function(data){
        console.log('User: ' + data.user + ' Text: ' + data.text);
        io.emit('updateText', {user: data.user, text: data.text});
    });
    
    socket.on('disconnect', function(){
        console.log('user ' + '' + ' disconnected');
    });
});


http.listen(3000, function(){
    console.log('Listening on port 3000');
  });