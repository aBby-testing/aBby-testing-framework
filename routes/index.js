var express = require('express');
var router = express.Router();
var uuidv4 = require('uuid/v4');

/* GET home page. */
router.get('/', function(req, res, next) {
  var visitorCookie = req.cookies.visitor.id;

  if (!visitorCookie) {
    visitorCookie = 0;
    res.cookie('visitor.id', visitorCookie);
    process.env.VISITOR_COUNT++;
  }

  console.log("visitCount: " + visitorCookie);

  var index = chooseLayout(visitorCookie);

  console.log("welcome visitor " + visitorCookie);
  console.log("type " + index );
  res.cookie('visitCount', visitorCookie);
  res.render(index, { title: 'Express' });
});

function chooseLayout(visitorID) {
  return (visitorID % 2 ? 'indexA' : 'indexB');
}

module.exports = router;
