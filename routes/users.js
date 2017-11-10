var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.render('2');
  res.send('respond with a resource');
 console.log('Tmp 2');
});

module.exports = router;
