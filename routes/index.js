var express = require('express');
var portfolio = require('../portfolio');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
    intro: portfolio.intro, 
    software_entries: portfolio.software_entries,
    music_entries: portfolio.music_entries,
    other_entries: portfolio.other_entries
  });
});

module.exports = router;
