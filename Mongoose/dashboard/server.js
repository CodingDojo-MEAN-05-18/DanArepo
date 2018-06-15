const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
//basic session use
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/dashboard');//this allows us to connect to the db
//if there isnt a db named whatever you call it, mongo will make it for you!!!!!
mongoose.Promise = global.Promise;//this lets mongoose use JS promises, it avoids an error code later on
//a basic mongoose schema with validation
var mongoosesSchema = mongoose.Schema({
    name: { type: String, required: true, minLength: 2},
    age: { type: Number, required: true, min: 0, max: 200},
    canDance: {type: Boolean, required: true}
}, {timestamps: true});
mongoose.model('Mongoose', mongoosesSchema);
var Mongoose = mongoose.model('Mongoose');

app.get('/', function(req, res) {//displays all mongooses
    Mongoose.find({},function(err, mongooses){
        if(err){
            console.log('find bad');
            res.render('index');
        }else{
            console.log('find good');
            res.render("index", {data: mongooses});
        }
    });
});

app.get('/mongoose/:id', function(req, res){
    var id = req.params.id;
    console.log('id check - ', id);
    Mongoose.find({_id: id}, function(err, mongoose){
        if(err){
            console.log('find bad');
            res.redirect('/');
        }else{
            console.log('find good - ', mongoose);
            res.render("edit", {data: mongoose});
        }
    });
});

app.get('/newMongoose', function(req, res){
    res.render('new');
});

app.post('/mongoose/new', function(req, res){
    var mongoose = new Mongoose({name: req.body.name, age: req.body.age, canDance: req.body.canDance});
    mongoose.save(function(err){
        if(err){
            console.log('save bad - ', err);
            res.redirect('/');
        }else{
            console.log('save good');
            res.redirect('/');
        }
    });
});

app.post('mongoose/edit/:id', function(req, res){
    var id = req.params.id;
    Mongoose.update({_id: id}, {name: req.body.name, age: req.body.age, canDance: req.body.canDance}, function(err){
        if(err){
            console.log('update bad');
            res.redirect('/');
        }else{
            console.log('update good');
            res.redirect('/');
        }
    });
});

app.post('/mongoose/destroy/:id', function(req, res){
    var id = req.params.id;
    Mongoose.remove({_id: id}, function(err){
        if(err){
            console.log('delete bad');
            res.redirect('/');
        }else{
            console.log('delete good');
            res.redirect('/');
        }
    });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});   