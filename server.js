var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var React = require('react');
var ReactDOM = require('react-dom/server');

var app = express();

//set Poart 
app.set('port',(process.env.PORT || 5000));

//set Static path
app.use(express.static(path.join(__dirname, 'client')));

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Start server
app.listen(app.get('port'),function(){
	console.log('Server Has Started on Port: '+ app.get('port'));
});