require("dotenv").config();
var express = require("express");
// var passport = require('passport');
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

// For Passport
// app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions

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
// var authRoute = require("./routes/auth.js")(app);
// var authRoute = require('./routes/auth.js')(app, passport);

//load passport strategies
// require('./config/passport/passport.js')(passport, db.user);

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
// db.sequelize.sync({ force: true }).then(function() {
//   db.Movie.bulkCreate(seeds).then(function() {
//     app.listen(PORT, function() {
//       console.log(
//         "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//         PORT,
//         PORT
//       );
//     });
//   });
// });





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


// // Making the output brighter, and adding different color to every word. Cause...priorities
// console.log("\x1b[1m","\x1b[34m","\n-------------------------------------------------\n" + "\x1b[30m","==> 🌎" +"\x1b[31m","Listening" + "\x1b[32m","on" + "\x1b[33m","port" + "\x1b[34m","%s." + "\x1b[35m","Visit:" + "\x1b[36m","http://localhost:%s/",PORT+ "\x1b[34m","\n-------------------------------------------------\n");
//
// // Resetting console formatting to default
// console.log("\x1b[0m");
//
// console.log("\x1b[1m","\x1b[34m","\n-------------------------------------------------\n" + "\x1b[30m","==> 🌎" +"\x1b[31m","Visit" + "\x1b[32m","http://localhost:%s/" + "\x1b[33m","in" + "\x1b[34m","your" + "\x1b[35m","browser.", PORT + "\x1b[34m","\n-------------------------------------------------\n");
//
// // Resetting console formatting to default
// console.log("\x1b[0m");




// db.sequelize.sync({ force: true })
//   .then(function() {
//     return db.Movie.bulkCreate(seeds);
//   })
//   .then(function() {
//     return db.RoundZero.bulkCreate(roundZeroSeeds);
//   })
//   .then(function() {
//     return db.RoundOne.bulkCreate(roundOneSeeds);
//   })
//   .then(function() {
//     return db.RoundTwo.bulkCreate(roundTwoSeeds);
//   })
//   .then(function() {
//     app.listen(PORT, function() {
//       console.log(
//         "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//         PORT,
//         PORT
//       );
//     });
//   });



// db.sequelize.sync({ force: true }).then(function() {
//   db.RoundOne.bulkCreate(seeds).then(function() {
//     app.listen(PORT, function() {
//       console.log(
//         "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//         PORT,
//         PORT
//       );
//     });
//   });
// });

// db.sequelize.sync({ force: true }).then(function() {
//   db.RoundTwo.bulkCreate(seeds).then(function() {
//     app.listen(PORT, function() {
//       console.log(
//         "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//         PORT,
//         PORT
//       );
//     });
//   });
// });

module.exports = app;
