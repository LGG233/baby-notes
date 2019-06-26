// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
// zzz Doug code 
var cors = require('cors');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
// zzz doug code
app.use(cors()); // Add routes, both API and view
// const routes = require('./routes');
// app.use(routes);
// Requiring our models for syncing
var db = require("./models");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// Static directory
// app.use(express.static("public"));
// zzz doug code
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Routes
// =============================================================
// require("./routes/api/childRoute")(app);
// Routes
// =============================================================
require("./routes/api/userRoute")(app);
require("./routes/api/childRoute")(app);
require("./routes/api/activitiesRoute")(app);
// const routes = require('./routes');
// app.use(routes);

// var bodyParser = require('body-parser')
// app.use(bodyParser.json())
// app.use(cors())
// app.use(
// bodyParser.urlencoded({
// extended: false
// })
// )
var Users = require("./routes/api/userRoute")
app.use("/users", Users)


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({
  force: false
}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});