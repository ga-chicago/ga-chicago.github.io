var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Contact Us' });
});

router.post('/contact', function(req, res) {
  var message;
  if (req.body) {
    console.log(req.body);
    message = "Hey, " + req.body.name + "! We've received your contact information. We will call you back ASAP.";
  } else {
    console.log('on my own..');
    message = "Uh oh... nothing was sent over. :("
  }
  res.send(message);
});

module.exports = router;
