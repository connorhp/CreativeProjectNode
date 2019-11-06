var express = require('express');
var router = express.Router();
var request = require("request")

/* GET home page. */
router.get('/dog', function(req, res, next) {
   console.log("In random dog route");
   var dogRest = "https://dog.ceo/api/breeds/image/random"
   request(dogRest).pipe(res)
});

router.get('/breeds', function(req, res, next) {
   console.log("In get breeds route");
   var breedRest = "https://dog.ceo/api/breeds/list/all"
   request(breedRest).pipe(res)
});

router.get('/dogBreed', function(req, res, next) {
   console.log("In dog breed route");
   console.log(req.query.q);
   var dogRest = "https://dog.ceo/api/breed/" + req.query.q + "/images/random"
   request(dogRest).pipe(res)
});
module.exports = router;
