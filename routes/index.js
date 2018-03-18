var express = require('express');
var router = express.Router();
var uuidv4 = require('uuid/v4');

/* GET home page. */
router.get('/', function(req, res, next) {
  var visitorCookie = req.cookies.visitor.id;
  if (!visitorCookie) {
    visitorID = uuidv4();
    
    var visitCount = 0;
    
    var visitor = {
      'id' : visitorID,
      'visitCount' : visitCount
    };
        
    res.cookie('visitor.id', visitorID);
  }

  var index = chooseLayout(visitor.id);

  console.log("welcome visitor " + visitorCookie);

  res.render(index, { title: 'Express' });
});

function chooseLayout(visitorID) {
  return (visitorID % 2 ? 'indexA' : 'indexB');
}

module.exports = router;
