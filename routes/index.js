var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { entries: require('../portfolio').entries });
});

module.exports = router;
