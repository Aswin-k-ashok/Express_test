var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  
  const values = ["D","z","A","f"]
  const person={name: "aswin",comments:{comment:"hey",date:"7-21"},values2 : ["D","z","A","f"]}
  const admin={name:"aswin", adm:false}

  res.render('index', {values,person,admin});
});

module.exports = router;
