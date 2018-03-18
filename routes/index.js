var express = require('express');
var router = express.Router();
var uuidv4 = require('uuid/v4');

router.get('/', function(req, res, next) {

  var visitorCookie = req.cookies.visitorCookie;
  var currentTime = new Date().toISOString();

  console.log("visitor count: " + process.env.VISITOR_COUNT);
  if (!visitorCookie) {
    console.log("Entered");
    visitorCookie = {
      'id' : process.env.VISITOR_COUNT,
      'createdAt' : currentTime,
      'firstTimeUser' : 'True',
      'visitCount' : '1',
      'numPagesVisited' : '1',
      'layoutType' : chooseLayout(process.env.VISITOR_COUNT)
    } 

    process.env.VISITOR_COUNT++;
  } else {
    visitorCookie.firstTimeUser = 'False';
    visitorCookie.visitCount++;
  };
  console.log(visitorCookie);

  var index = chooseLayout(visitorCookie.id);

  res.cookie('visitorCookie', visitorCookie);

  res.render('./results', { title: 'Express' });

});

function chooseLayout(visitorID) {
  return (visitorID % 2 ? 'indexA' : 'indexB');
}

module.exports = router;
