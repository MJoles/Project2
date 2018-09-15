var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/roundZero", function(req, res) {
    // findAll runs and then in the callback function we name the query response
    db.Movie.findAll({}).then(function(dbMovies) {
      res.render("roundZero", {
        movies: dbMovies
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Movie.findOne({ where: { id: req.params.id } }).then(function(dbMovie) {
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
