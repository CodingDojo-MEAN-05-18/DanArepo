var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');//add in mongoose
var session = require('express-session');//needed or else flash won't work 
//why the hell would they put this at the bottom of the documentation

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

mongoose.connect('mongodb://localhost/basic_mongoose');//this allows us to connect to the db
//if there isnt a db named whatever you call it, mongo will make it for you!!!!!
mongoose.Promise = global.Promise;//this lets mongoose use JS promises, it avoids an error code later on

//a basic mongoose schema with validation
//in order to display flash error messages...
var userSchema = mongoose.Schema({
    name: { type: String, required: true, minLength: 2},
    age: { type: Number, required: true, min: 0, max: 200},
    canDance: {type: Boolean, required: true}
}, {timestamps: true});
mongoose.model('User', userSchema);
var User = mongoose.model('User');

app.get('/', function(req, res) {
    //basic READ OP
    User.find({
        //requirements go here - ie: {name: 'Jessica'} or even a param {name: paramName}
    }, function(err, users){
        if(err){
            console.log('find bad');
            res.render('index');
        }else{
            console.log('find good');
            res.render("index", {data: users});
            //the first word is what goes into the ejs, the second is what it equals
        }
    });
});
/**
 * Other Operations
     * finding one USER
     * User.findOne({requirements}, function(err, user){
        * if(err){
                console.log('find bad');
                res.render(page name);
            }else{
                console.log('find good');
                res.render(page name, {data: user});
            }
        });
     */

     /**
      * DELETE a user
      * User.remove({requirements - leave blank to delete all users}, function(err){
        * if(err){
                console.log('delete bad');
                res.render(page name);
            }else{
                console.log('delete good');
                res.render(page name);
            }
        });
      */

    /**
     * UPDATE
     * User.update({requirements}, {$push: {data : 'data you want to push'}}, function(err){
        * if(err){
                    console.log('update bad');
                    res.render(page name);
                }else{
                    console.log('update good');
                    res.render(page name);
            }
        });

        another way - kinda longer but whatever

        User.find({requirements}, function(err, user){
            user.name = 'new name';
            user.newData.push({data: 'newData'});
            user.save(function(err){
                if(err){
                    console.log('update bad');
                    res.render(page name);
                }else{
                    console.log('update good');
                    res.render(page name);
                }
            });
        });
     */

app.post('/users', function(req,res){
    console.log('POST DATA', req.body);
    //Basic CREATE OP with validation and flash message errors
    var user = new User({name: req.body.name, age: req.body.age});
    user.save(function(err){
        if(err){
            console.log('save bad - ', err);
            res.redirect('/');
        }else{
            console.log('save good');
            res.redirect('/');
        }
    });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});   