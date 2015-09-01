var express = require('express');
var app = express();

app.get('/api', function(req, res){
  res.send({
  	"message": "hello, friends"
  });
});

app.listen(3000);

console.log("Listening on localhost:3000...");
