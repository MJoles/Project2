var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Movie.findAll({}).then(function(moviesdb) {
      res.render("index", {
        msg: "Welcome!",
        movies: votingdb
      });
    });
  });

  //tad test Load Round 0
  app.get("/test", function(req, res) {
    // db.RoundZero.findAll({}).then(function(round) {
      res.render("round1", {
        movies: [
          {
              id: '1',
              movieTitle: 'movie1'
          },
          {
              id: '2',
              movieTitle: 'movie2'
          },
          {
            id: '3',
            movieTitle: 'movie3'
        },
        {
            id: '4',
            movieTitle: 'movie4'
        },
        {
          id: '5',
          movieTitle: 'movie5'
      },
      {
          id: '6',
          movieTitle: 'movie6'
      },
      {
        id: '7',
        movieTitle: 'movie7'
    },
    {
        id: '8',
        movieTitle: 'movie8'
    }
      ]
      });
    // });
  });


  //Load Round 0
  app.get("/round", function(req, res) {
    console.log(req.headers['x-forwarded-for'], req.connection.remoteAddress, '');
    console.log(ip);
    db.userTable.findAll({}).then(function(round) {
      res.render("round", {
        movies: round
      });
    });
  });

  //Load Round 1
  app.get("/round1", function(req, res) {
    db.RoundOne.findEach({ where: { isSelected: true } }).then(function(firstRound) {
      res.render("round1", {
        movies: firstRound
      });
    });
  });

  //Load Round 2
  app.get("/round2", function(req, res) {
    db.RoundTwo.findOne({ where: { isSelected: true } }).then(function(roundTwo) {
      res.render("round2", {
        movies: roundTwo
      });
    });
  });

  //Load Round 3
  app.get("/round3", function(req, res) {
    db.Exam.findOne({ where: { iisSelected: true } }).then(function(roundThree) {
      res.render("round3", {
        movies: roundThree
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("//:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
