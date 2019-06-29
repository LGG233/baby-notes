
var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");
var cors = require('cors');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;
app.use(cors()); // Add routes, both API and view

// Requiring our models for syncing
var db = require("./models");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// We need to use sessions to keep track of our user's login status
app.use(session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes/api/userRoute")(app);
require("./routes/api/childRoute")(app);
require("./routes/api/activitiesRoute")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({
  force: true
}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});