//---------------------------------------------------------------------------------------------------------
// For sake of time, all of the routes are going to be in the same file - htmlRoutes, instead of in both htmlRoutes and apiRoutes
//---------------------------------------------------------------------------------------------------------

var db = require("../models");

module.exports = function(app) {
  // Get roundOne row
  app.get("/api/roundOneGet", function(req, res) {
    db.RoundOne.findOne({}).then(function(dbRoundOne) {
      res.render("round2", {
        movies: dbRoundOne
      });
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
