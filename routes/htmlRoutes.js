var db = require("../models");

module.exports = function (app) {
  // Load index page
  // app.get("/", function (req, res) {
  //   db.Movie.findAll({}).then(function (moviesdb) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       movies: votingdb
  //     });
  //   });
  // });

  //tad test Load Round 0
  app.get("/rd1", function (req, res) {
    db.Movie.findAll({}).then(function (dbMovies_r1) {
      res.render("round1", {
        movies: dbMovies_r1
      });
    });
  });

  // Post votes from round one into round two
  app.post("/rd2", function (req, res) {
    db.RoundOne.create(req.body).then(function(dbRoundOne) {
      res.json(dbRoundOne);
    });
  });

  //tad test Load Round 0
  app.get("/rd2", function (req, res) {
    db.RoundOne.findOne({}).then(function (dbMovies_r2) {
      res.render("round2", {
      movies: dbMovies_r2
      });
    });
  });

  // Post votes from round one into round two
  app.post("/rd3", function (req, res) {
    db.RoundTwo.create(req.body).then(function(dbRoundTwo) {
      res.json(dbRoundTwo);
    });
  });

  //tad test Load Round 0
  app.get("/rd3", function (req, res) {
    db.RoundThree.findOne({}).then(function (dbMovies_r3) {
      res.render("round3", {
      movies: dbMovies_r3
      });
    });
  });

  //tad test --round 2 starts by loading Round 1 choices

  // //Load Round 0
  // app.get("/round", function (req, res) {
  //   console.log(req.headers['x-forwarded-for'], req.connection.remoteAddress, '');
  //   console.log(ip);
  //   db.userTable.findAll({}).then(function (round) {
  //     res.render("round", {
  //       movies: round
  //     });
  //   });
  // });
  //
  // //Load Round 1
  // app.get("/round1", function (req, res) {
  //   db.RoundOne.findEach({ where: { isSelected: true } }).then(function (firstRound) {
  //     res.render("round1", {
  //       movies: firstRound
  //     });
  //   });
  // });
  //
  // //Load Round 2
  // app.get("/round2", function (req, res) {
  //   db.RoundTwo.findOne({ where: { isSelected: true } }).then(function (roundTwo) {
  //     res.render("round2", {
  //       movies: roundTwo
  //     });
  //   });
  // });
  //
  // //Load Round 3
  // app.get("/round3", function (req, res) {
  //   db.Exam.findOne({ where: { iisSelected: true } }).then(function (roundThree) {
  //     res.render("round3", {
  //       movies: roundThree
  //     });
  //   });
  // });
  //
  // // Load example page and pass in an example by id
  // app.get("//:id", function (req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
