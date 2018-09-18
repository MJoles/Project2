var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Movie.findAll({}).then(function (moviesdb) {
      res.render("index", {
        msg: "Welcome!",
        movies: votingdb
      });
    });
  });


  //tad test Load Round 0
  app.get(“/test”, function(req, res) {
    res.render(“round1", {
      movies: [
        {
          id: ‘1’,
        movieTitle: "The Dark Knight"
        },
  {
    id: ‘2’,
    movieTitle: "Captain America: The Winter Soldier"
  },
  {
    id: ‘3’,
    movieTitle: "Spiderman 2"
  },
  {
    id: ‘4’,
    movieTitle: "Superman (1978)"
  },
  {
    id: ‘5’,
    movieTitle: "The Avengers"
  },
  {
    id: ‘6’,
    movieTitle: "Batman Begins"
  },
  {
    id: ‘7’,
    movieTitle: "Guardians of the Galaxy"
  },
  {
    id: ‘8’,
    movieTitle: "Logan"
  }
    ]
  });
    });




//Load Round 0
app.get("/round", function (req, res) {
  console.log(req.headers['x-forwarded-for'], req.connection.remoteAddress, '');
  console.log(ip);
  db.userTable.findAll({}).then(function (round) {
    res.render("round", {
      movies: round
    });
  });
});

//Load Round 1
app.get("/round1", function (req, res) {
  db.RoundOne.findEach({ where: { isSelected: true } }).then(function (firstRound) {
    res.render("round1", {
      movies: firstRound
    });
  });
});

//Load Round 2
app.get("/round2", function (req, res) {
  db.RoundTwo.findOne({ where: { isSelected: true } }).then(function (roundTwo) {
    res.render("round2", {
      movies: roundTwo
    });
  });
});

//Load Round 3
app.get("/round3", function (req, res) {
  db.Exam.findOne({ where: { iisSelected: true } }).then(function (roundThree) {
    res.render("round3", {
      movies: roundThree
    });
  });
});

// Load example page and pass in an example by id
app.get("//:id", function (req, res) {
  db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
    res.render("example", {
      example: dbExample
    });
  });
});

// Render 404 page for any unmatched routes
app.get("*", function (req, res) {
  res.render("404");
});
};
