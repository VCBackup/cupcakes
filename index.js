var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

var logger = function(req, res, next){
    console.log('\n\n-------------\n---------------\n\n');
    console.log('\n____HEADER____\n', req.headers);
    console.log('\n___BODY____', req.body);
    console.log('\n____SESSION____\n', req.session);
    next();
};

var cart = [];

app.use(bodyParser.json());



app.use(session({
    secret: 'fselifhseilfhe',
    saveUninitialized: true,
    resave: true
}));

app.post('/cart', function(req, res, next){
    if (!req.session.cart){
        req.session.cart = [];
    }
    req.session.cart.push(req.body);
    res.status(200).json(req.session.cart);
})

app.listen(3000, function(){
    console.log('listening on port 3000' );
})