var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('DevOps - Strona startowa!');
    console.log('Żądanie strony startowej Home!');
});

app.get('/', function(req, res){
    res.send('DevOps - Strona użytkownika Users!');
    console.log('Żądanie strony logowania Users!');
});

app.listen(3001, function(){
    console.log('Aplikacja działa - OK!')
});