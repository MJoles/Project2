// Requiring our models folder
var db = require("../models");

module.exports = function (app) {

  //Get request for rd1 page to the Movie table to findAll Movies and put them in their matches
  app.get("/rd1", function (req, res) {

    db.Movie.findAll({}).then(function (dbMovies) {
      for (var i = 0; i < dbMovies.length; i++) {
        if (i < 2) {
          // The first two movies are match 1
          dbMovies[i].match = 1;
        } else if (i < 4) {
          // The next two movies are match 2
          dbMovies[i].match = 2;
        } else if (i < 6) {
          // The next two movies are match 3
          dbMovies[i].match = 3;
        } else {
          // The others are match 4
          dbMovies[i].match = 4;
        }
      }
      res.render("round1", {
        movies: dbMovies
      });
    });

    //Get request for rd2 page to the RoundOne table
    app.get("/rd2", function (req, res) {
      db.RoundOne.findAll({
        limit: 1,
        order: [ [ 'createdAt', 'DESC' ]]
      }).then(function (data) {
        var choicesRow = data[0]; // putting data as an array
        var choicesArray = [
          {movieTitle: choicesRow.choiceOne},
          {movieTitle: choicesRow.choiceTwo},
          {movieTitle: choicesRow.choiceThree},
          {movieTitle: choicesRow.choiceFour}
        ];
        choicesArray[0].match = 5;
        choicesArray[1].match = 5;
        choicesArray[2].match = 6;
        choicesArray[3].match = 6;
        res.render("round2", {
          roundones: choicesArray
        });
      });
    });

    //Post votes from RoundOne table into RoundTwo table
    app.post("/rd2", function (req, res) {
      db.RoundOne.create(req.body).then(function (dbRoundOne) {
        res.json(dbRoundOne);
      });
    });

    // Get request from RoundTwo model into RoundThree
    app.get("/rd3", function (req, res) {
      db.RoundTwo.findAll({
        limit: 1,
        order: [ [ 'createdAt', 'DESC' ]]
      }).then(function (data) {

        var choicesRow = data[0]; // putting data as an array
        var choicesArray = [
          {movieTitle: choicesRow.choiceOne},
          {movieTitle: choicesRow.choiceTwo}
        ];
          choicesArray[0].match = 7;
          choicesArray[1].match = 7;
          res.render("round3", {
          roundtwos: choicesArray
        });
      });
    });
    // Post votes from round two into round three
    app.post("/rd3", function (req, res) {
      db.RoundTwo.create(req.body).then(function (dbRoundTwo) {
        res.json(dbRoundTwo);
      });
    });

    //Get Request to winner page using findAll from roundtrees page to find winner
    app.get("/win", function (req, res) {
      db.RoundThree.findAll({
        limit: 1,
        order: [ [ 'createdAt', 'DESC' ]]
      }).then(function (data) {
        var choicesRow = data[0]; // how it was in the database
        var choicesArray = [
          {movieTitle: choicesRow}
        ];
        choicesArray[0].match = 7;
        res.render("winner", {
          roundthrees: choicesArray
        }
      );
      });
    });
    //Post request to win page 
    //Currently can only access typing in /win instead of using the onclick handler
    app.post("/win", function (req, res) {
      db.RoundThree.create(req.body).then(function (dbRoundThree) {
        res.json(dbRoundThree);
      });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
      res.render("404");
    });
  });
};
