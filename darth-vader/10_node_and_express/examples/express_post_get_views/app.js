var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path'); // lets us use files and open folders

// setup template framework
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// stupid model
var data = {
  "name": "James",
  "sport": "hockey",
  "food": "sushi",
  "colour": "purple"
}

var indexData = {
  title: "My first Express App",
  message: "Holy @#$@#$@# another platform! yay :)"
}

var contactData = {
  title: "Contact Us!",
  namePlaceholder: "Enter your name",
  submitButtonText: "Send me your info"
}

app.get('/', function(req, res) {
  // render the template named 'index' and use 'indexData'
  res.render('index', indexData);
});

app.get('/contact', function(request, response) {
  response.render('contact', contactData);
});

app.post('/api/contact', function(request, response) {
  console.log(request.body);
  response.send("Hey, thanks for this really useful data... " + request.body.name);
});

/*
get '/' do
  erb :index
end
*/

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
