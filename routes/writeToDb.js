var express = require('express');
var router = express.Router();
var uuidv4 = require('uuid/v4');
var models = require('../models');

router.post('/', function(req, res, next) {

    visitorData = req.cookies.visitorCookie;

    if (!visitorData) {
    	console.log("ERROR: No visitor data logged");
    } else {
    	models.Visitor.create(visitorData).then(function(newUser) {
        console.log("visitor data:");
        console.log(visitorData);

        console.log("Visitor data written?");
        
        res.redirect('/writeToDb');
    }); 

    }

});

router.get('/', function(req, res, next) {

    visitorData = req.cookies.visitorCookie;

    if (!visitorData) {
    	console.log("ERROR: No visitor data logged");
    } else {
    	models.Visitor.create(visitorData).then(function(newUser) {
        console.log("visitor data:");
        console.log(visitorData);

        console.log("Visitor data written?");
        
        res.redirect('/');
    }); 

    }

});

module.exports = router;
