var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET Gardens page. */
router.get('/gardens', function(req, res, next) {
  res.render('gardens', { title: 'Express' });
});


/* GET Membership page. */
router.get('/membership', function(req, res, next) {
  res.render('members', { title: 'Express' });
});

module.exports = router;
