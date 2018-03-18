var express = require('express');
var router = express.Router();
var uuidv4 = require('uuid/v4');

/* GET home page. */
router.get('/', function(req, res, next) {
  var visitor = req.cookies.visitor;
  if (!visitor) {
    visitor = uuidv4();
    res.cookie('visitor', visitor);
  }

  console.log("welcome visitor " + visitor);

  res.render('index', { title: 'Express' });
});

module.exports = router;
