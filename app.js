var express = require('express');
var app = express();
var path = require('path');

//==========================================================
//The root url displays the index.html page

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

//==========================================================
//These routes act as json urls that can be ajax called by the index.html page.

app.get('/users', function(req,res){
  res.sendFile(path.join(__dirname + '/public/data/users.json'));
});

app.get('/steps', function(req,res){
  res.sendFile(path.join(__dirname + '/public/data/steps.json'));
});

app.get('/process', function(req,res){
  res.sendFile(path.join(__dirname + '/public/data/process.json'));
});


//==========================================================
//Server port stuff
app.listen(3000, function () {
  console.log('------------------------------------\n'
            +'App listening on port 3000!\n'
            +'Go to 127.0.0.1:3000 in your browser'
            +'\n------------------------------------');
});
