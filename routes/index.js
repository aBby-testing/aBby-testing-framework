var express = require('express');
var router = express.Router();
var uuidv4 = require('uuid/v4');

router.get('/', function(req, res, next) {
    res.render('./indexA', { title: 'Results' });
});

router.get('bucketed_page', function(req, res, next) {

  var visitorCookie = req.cookies.visitorCookie;
  var currentTime = new Date().toISOString();

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

  res.render(index, { title: 'Express' });

});

function chooseLayout(visitorID) {
  return (visitorID % 2 ? '/indexA' : '/indexB');
}

module.exports = router;
