var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Crossroads' ,name: 'aswin',value: 'hey there' });
});

module.exports = router;