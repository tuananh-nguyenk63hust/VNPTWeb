var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login Page', message:"login" });
  
});
router.get('/bookcar', function(req, res, next) {
  res.render('car', { title: 'Car Page', message:"car" });
  
});
module.exports = router;
