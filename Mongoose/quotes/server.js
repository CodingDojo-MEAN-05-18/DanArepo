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

mongoose.connect('mongodb://localhost/quotes');//this allows us to connect to the db
//if there isnt a db named whatever you call it, mongo will make it for you!!!!!
mongoose.Promise = global.Promise;//this lets mongoose use JS promises, it avoids an error code later on

var quoteSchema = mongoose.Schema({
    name: { type: String, required: true, minLength: 2},
    quote: { type: String, required: true, minLength: 1}
}, {timestamps: true});
mongoose.model('Quote', quoteSchema);
var Quote = mongoose.model('Quote');

app.get('/', function(req, res) {
    res.render("index");
});

app.post('/quotes', function(req, res){
    console.log('post check');
    var newQuote = new Quote({name: req.body.name, quote: req.body.quote});
    newQuote.save(function(err){
        if(err){
            console.log('save bad - ', err);
            res.redirect('/');
        }else{
            console.log('save good');
            res.redirect('/quotesShow');
        }
    });
});

app.get('/quotesShow', function(req, res){
    Quote.find({}, function(err, quotes){
        if(err){
            console.log('find bad');
            res.redirect('/');
        }else{
            console.log('find good');
            res.render("quotes", {data: quotes});
            //the first word is what goes into the ejs, the second is what it equals
        }
    });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});   