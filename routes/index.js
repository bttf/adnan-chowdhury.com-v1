var express = require('express');
var router = express.Router();

var mockData = [
  {
    title: 'Sitting on my Ass',
    datesActive: 'Sept. 15 1988 - Present'
  },
  {
    title: 'Bitching and Whining',
    datesActive: 'Constantly'
  }
];


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', data: mockData });
});

module.exports = router;
