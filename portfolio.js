var entries = [{
  "link": "http://chewbonga.com",
  "title": "Chewbonga Blog",
  "date": "Fall 2014",
  "points": [
    "Development blog created for purposes of keeping record, sharing findings and inviting criticism",
    "Ember.js + Express + Node + MongoDB Stack",
    "Fully-responsive for mobile browsers by utilizing Bootstrap",
    "Code available on GitHub: <a href='https://github.com/bttf/ember-blog'>1</a> <a href='https://github.com/bttf/express-mongodb'>2</a>"],
    "img": "/img/chewbongaBlog.png"
}, {
  "title": "This website",
  "date": "Fall 2014",
  "points": ["Basic landing page for professional inquires.",
    "Performance-conscious server-rendered webpage.",
    "Implemented with Express + Node",
    "Fully-responsive with Bootstrap",
    "Built with Progressive Enhancement in mind to degrade gracefully."],
    "img": "/img/adnanChowdhurySite.png"
}, {
  "link": "https://www.facebook.com/thejollybengalifoodtruck",
  "title": "The Jolly Bengali Food Truck",
  "date": "Fall 2011 to Fall 2014",
  "points": [
    "Self-started mobile food vending business",
    "Based on life-long aspiration to highlight Bengali culture, cuisine and art",
    "Built over two years during nights & weekends",
    "Served at events in Broward and Miami-Dade counties",
    "Graphic design & Web presence self-made",
    "Fully-responsive <a href='http://thejollybengalifoodtruck.com'>landing page</a> built with Bootstrap"
  ]
}];

module.exports = {
  "entries": entries.sort(function(a, b) {
    var y1 = parseInt(a.date.split(" ")[1]);
    var y2 = parseInt(b.date.split(" ")[1]);
    return y2 - y1;
  })
};
