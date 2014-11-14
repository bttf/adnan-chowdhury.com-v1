var entries = [{
  "title": "<a href=\"http://chewbonga.com\"><i class=\"fa fa-link\"></i></a> Chewbonga Blog",
  "date": "Fall 2014",
  "points": ["Development blog created for purposes of keeping record, sharing findings and inviting criticism",
    "Built with Ember.js + Express + Node + MongoDB",
    "Fully-responsive for mobile browsers by utilizing Bootstrap",
    "Code available on GitHub: <a href='#'>1</a> <a href='#'>2</a>"],
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
}];

module.exports = {
  "entries": entries.sort(function(a, b) {
    var y1 = parseInt(a.date.split(" ")[1]);
    var y2 = parseInt(b.date.split(" ")[1]);
    return y2 - y1;
  })
};
