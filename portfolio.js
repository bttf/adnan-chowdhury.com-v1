var intro = "Hard-working individual who thrives on vision. I like to see things get made the way they ought to be. Consequently, I work hard to get things made the way they ought to be.";

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
  "title": "Adnan-Chowdhury.com",
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
}, {
  "link": "https://github.com/bttf/hot-pies",
  "title": "Hot-Pies: A UFO Shoot-Em-Up Game",
  "date" : "Fall 2013 to Summer 2014",
  "points": [
    "Written using HTML5 and JavaScript",
    "Object-oriented design",
    "Test-driven developed game; Tests written first",
    "Over 180 unit tests",
    "Original game art"
  ]
}, {
  "link": "https://github.com/bttf/one_bullet",
  "title": "One Bullet: Ludum Dare #28 Competition Entry",
  "date": "Winter 2013",
  "points": [
    "HTML5/JS Game created within 48 hr for Ludum Dare competition",
    "Rapid implementation using HTML5 and JavaScript",
    "Object-oriented design",
    "Original game art",
    "Won 18th place in Humour category (out of 2063)"
  ]
}, {
  "link": "http://adnanchowdhury.bandcamp.com/album/ladydog",
  "title": "Ladydog",
  "date": "Spring 2010 to Winter 2011",
  "points": [
    "Original musical album",
    "Features several original written songs",
    "Wide range of genres",
    "Edited, mixed and mastered with open source tool Audacity",
    "Experimented with various instrumentation and complex arrangements",
    "Includes cover of Donkey Kong Country song 'Simian Segue'"
  ]
}, {
  "link": "http://www.albinoblacksheep.com/flash/schfiftyfive",
  "title": "Schfifty Five",
  "date": "Spring 2003",
  "points": [
    "Flash music video with music by Gröûp X",
    "Created with Adobe Flash MX",
    "Officially released on Albinoblacksheep.com",
    "Reached wide audience"
  ]
}];

module.exports = {
  "intro": intro,
  "entries": entries.sort(function(a, b) {
    var y1 = parseInt(a.date.split(" ")[1]);
    var y2 = parseInt(b.date.split(" ")[1]);
    return y2 - y1;
  })
};
