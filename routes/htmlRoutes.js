var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Movie.findAll({}).then(function(moviesdb) {
      res.render("index", {
        msg: "Welcome!",
        movies: moviesdb
      });
    });
  });

  //Load Round 0
  app.get("/round", function(req, res) {
    db.Movie.findAll({}).then(function(roundZero) {
      res.render("index", {
        movies: roundZero
      });
    });
  });

  //Load Round 1 - Queries RoundZero to find which movies were selected
  app.get("/round1", function(req, res) {
    db.RoundZero.findAll({ where: { isSelected: true } }).then(function(roundOne) {
    
      res.render("round1", {
        movies: roundOne
      });
    });
  });

  //Load Round 2 - Queries RoundOne to find which movies were selected
  app.get("/round2", function(req, res) {
    db.RoundOne.findAll({ where: { isSelected: true } }).then(function(roundTwo) {
      res.render("round2", {
        movies: roundTwo
      });
    });
  });

  //Final Round - Queries RoundTwo to find which movies were selected
  app.get("/final", function(req, res) {
    db.RoundTwo.findOne({ where: { isSelected: true } }).then(function(finalRound) {
      res.render("final", {
        movies: finalRound
      });
    });
  });

  // Load example page and pass in an example by id
 // app.get("//:id", function(req, res) {
   // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      //res.render("example", {
        //example: dbExample
      //});
    //});
  //});

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
