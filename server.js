
var express = require("express");
var session = require("express-session");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var flash = require('connect-flash');
var passport = require("./config/passport");
var cors = require('cors');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;
app.use(cors()); // Add routes, both API and view

// Requiring our models for syncing
var db = require("./models");

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// We need to use sessions to keep track of our user's login status
app.use(session({
  secret: "wesurvivedbootcamp",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// Routes
require("./routes/api/userRoute")(app);
require("./routes/api/childRoute")(app);
require("./routes/api/activitiesRoute")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({
  force: false
}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});