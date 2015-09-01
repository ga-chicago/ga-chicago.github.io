var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// stupid model
var data = {
  "name": "James",
  "sport": "hockey",
  "food": "sushi",
  "colour": "purple"
}

// a GET request
app.get('/api', function(req, res){
  res.send(data);
});

app.get('/api/likes', function(req, res) {
  res.send(data);
});

// a POST request
app.post('/api/winners', function(req, res) {

  console.log('params');
  console.log(req.params);

  console.log('body');
  console.log(req.body);

  console.log('query');
  console.log(req.query);

  console.log('here be dragons');
  console.log(req);

  res.send("thanks guys");

});

// a POST request
app.post('/api/items/:id/:name', function(req, res) {

  console.log('params');
  console.log(req.params);

  console.log('body');
  console.log(req.body);

  console.log('query');
  console.log(req.query);

  res.send("thanks guys");

});

app.listen(5000);

console.log("Listening on localhost:5000...");
