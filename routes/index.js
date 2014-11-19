var express = require('express');
var portfolio = require('../portfolio');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { intro: portfolio.intro, entries: portfolio.entries });
});

module.exports = router;
