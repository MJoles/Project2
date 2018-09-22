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
      })
    }
    );


    //tad test --round 2 starts by loading Round 1 choices
    app.get("/rd2", function (req, res) {
      db.RoundOne.findAll({
        limit: 1,
        order: [ [ 'createdAt', 'DESC' ]]
      }).then(function (data) {
        
        var choicesRow = data[0]; // how it was in the database
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
      }
      );
      });
    });


    // Post votes from round one into round two
    // app.post("/rd2", function (req, res) {
    //   db.RoundOne.create(req.body).then(function (dbRoundOne) {
    //     res.json(dbRoundOne);
    //   });
    // });

    //get request from RoundTwo model into RoundThree
    app.get("/rd3", function (req, res) {
      db.RoundTwo.findAll({
        limit: 1,
        order: [ [ 'createdAt', 'DESC' ]]
      }).then(function (data) {
        
        var choicesRow = data[0]; // how it was in the database
        var choicesArray = [
          {movieTitle: choicesRow.choiceOne},
          {movieTitle: choicesRow.choiceTwo}
        ];
        
        choicesArray[0].match = 7;
        choicesArray[1].match = 7;
       
        
        res.render("round3", {
          roundtwos: choicesArray
      }
      );
      });
    });

    // Post votes from round one into round two
    app.post("/rd3", function (req, res) {
      db.RoundTwo.create(req.body).then(function (dbRoundTwo) {
        res.json(dbRoundTwo);
      });
    });


    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
      res.render("404");
    });
  });
};
