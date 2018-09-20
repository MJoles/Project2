require("dotenv").config();
var express = require("express");
var session = require('express-session');
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var env = require('dotenv').load();
var db = require("./models");
var seeds = require("./db/seeds");

var app = express();
// var PORT = process.env.PORT || 3000;
var PORT = process.env.PORT || 4000;
app.enable('trust proxy');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

//Models
var models = require("./models");

//Sync Database
models.sequelize.sync().then(function() {
    console.log('Nice! Database is looking good!');
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
});

// Starting the server, syncing our models ------------------------------------/
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  Promise.all([
    db.Movie.bulkCreate(seeds.seeds),
    db.userTable.bulkCreate(seeds.userSeeds),
    db.RoundZero.bulkCreate(seeds.roundZeroSeeds),
    db.RoundOne.bulkCreate(seeds.roundOneSeeds),
    db.RoundTwo.bulkCreate(seeds.roundTwoSeeds),
    db.RoundThree.bulkCreate(seeds.roundThreeSeeds)
  ]).then(function() {
    app.listen(PORT, function() {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  });
});

module.exports = app;
