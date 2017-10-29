var intro = "I started tinkering with computers at an early age. Today I am building a career out of them. Music has been my favorite and most endearing hobby. Overall, I am a creative individual with an aim for the highest potential.";

var entries = [{
  link: 'https://app.quartzy.com/register',
  title: 'Quartzy - lab management platform',
  date: 'Summer 2016 - Fall 2017',
  type: 'software',
  points: [
    'Ember.js Web-app w/ PHP7/Laravel Backend',
    'Large scale app used by thousands of scientists',
  ],
}, {
  link: 'https://slushi.es',
  title: 'Slushi.es - a bookmark manager',
  date: 'Fall 2016 - Present',
  type: 'software',
  points: [
    'Ember.js + Express/Node.js + PostgreSQL',
    'Social bookmarking app w/ emphasis on privacy and minimalism',
  ],
}, {
  link: 'https://scribble.today',
  title: 'Scribble.today - a personal journal in an inspiring setting',
  date: 'Summer 2016 - Present',
  type: 'software',
  points: [
    'Ember.js + Express/Node.js + PostgreSQL',
    'Presents sleek UI in conjunction with randomly selected impressionist paintings',
  ],
}, {
  "link": "http://screenwritr.88mph.io",
  "title": "Screenwritr.io - Write Screenplays in your Browser",
  "date": "Fall 2014",
  "type": "software",
  "points": [
    "Screenwriting web-app to produce properly formatted scripts",
    "Ember.js + Firebase",
    "Code available on GitHub: <a href='https://github.com/bttf/screenwritr'>[1]</a>"
  ]
}, {
  "link": "/",
  "title": "Adnan-Chowdhury.com",
  "date": "Fall 2014",
  "type": "software",
  "points": [
    "Landing page for professional inquires",
    "Node.js + Express, Server-rendered web page",
    "Built with Progressive Enhancement in mind",
    "Code available on GitHub: <a href='https://github.com/bttf/adnan-chowdhury.com'>[1]</a>"
  ],
    "img": "/img/adnanChowdhurySite.png"
}, {
  "link": "https://www.facebook.com/thejollybengalifoodtruck",
  "title": "The Jolly Bengali Food Truck",
  "date": "Fall 2011 to Fall 2014",
  "type": "other",
  "points": [
    "Self-started mobile food vending business",
    "Based on life-long aspiration to highlight Bengali culture, cuisine and art",
    "Built during nights & weekends over two years",
    "Served at events in Broward and Miami-Dade counties"
  ]
}, {
  "link": "https://github.com/bttf/hot-pies",
  "title": "HTML5 Game: \"Hot-Pies: A UFO Shoot-Em-Up Game\"",
  "date" : "Fall 2013 to Summer 2014",
  "type": "software",
  "points": [
    "In-Browser Video Game bult with HTML5 + JavaScript",
    "Node.js + Express Server Architecture",
    "Jasmine Unit testing, TDD",
    "Original GIMP-created game art",
    "Code available on GitHub: <a href='https://github.com/bttf/hot-pies'>[1]</a>"
  ]
}, {
  "link": "https://github.com/bttf/one_bullet",
  "title": "One Bullet: Ludum Dare #28 Competition Entry",
  "date": "Winter 2013",
  "type": "software",
  "points": [
    "Game created within 48 hr for Ludum Dare #28 competition",
    "Won 18th place in Humour category (out of 2063)",
    "HTML5 and JavaScript Game Architecture",
    "GIMP, Original game art"
  ]
}, {
  "link": "http://adnanchowdhury.bandcamp.com/album/ladydog",
  "title": "Ladydog",
  "date": "Spring 2010 to Winter 2011",
  "type": "music",
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
  "type": "other",
  "points": [
    "Flash music video with music by Gröûp X",
    "Created with Adobe Flash MX",
    "Officially released on Albinoblacksheep.com",
    "Reached a wide audience"
  ]
}, {
  "link": "http://adnanchowdhury.bandcamp.com/album/a-glass-of-chocolate-milk",
  "title": "A Glass of Chocolate Milk",
  "date": "Summer 2012",
  "type": "music",
  "points": [
    "Full-instrumental album with former band 'Chocolate Milk'",
    "Heavy blues and Blues-rock influence",
    "Featues improvistational blues segments"
  ]
}, {
  "link": "https://soundcloud.com/adnan_chowdhury",
  "title": "Personal Soundcloud",
  "date": "Fall 2011 to Present",
  "type": "music",
  "points": [
    "Collection of single recordings and experimental bits",
    "Recordings span over three years",
    "A melange of genres"
  ]
}];

function sortEntries(a, b) {
  var aDate = a.date.split(" ");
  var bDate = b.date.split(" ");

  // var y1 = parseInt(aDate[1]);
  // var y2 = parseInt(bDate[1]);

  if (aDate[aDate.length-1] === 'Present') {
    y1 = (new Date()).getFullYear();
  } else {
    y1 = parseInt(aDate[aDate.length-1]);
  }

  if (bDate[bDate.length-1] === 'Present') {
    y2 = (new Date()).getFullYear();
  } else {
    y2 = parseInt(bDate[bDate.length-1]);
  }

  return y2 - y1;
}

function softwareOnly(entry) {
  return entry.type === 'software';
}

function musicOnly(entry) {
  return entry.type === 'music';
}

function otherOnly(entry) {
  return entry.type === 'other';
}

module.exports = {
  "intro": intro,
  "entries": entries.sort(sortEntries),
  "software_entries": entries.filter(softwareOnly).sort(sortEntries),
  "music_entries": entries.filter(musicOnly).sort(sortEntries),
  "other_entries": entries.filter(otherOnly).sort(sortEntries)
};
