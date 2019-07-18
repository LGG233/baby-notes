var db = require("../../models");
var passport = require("../../config/passport");
// var auth = require("../../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.post("/user/login", passport.authenticate("local"), (req, res) => {
    if (req.isAuthenticated()) {
      console.log("User IS authenticated file-route/user/login");
      db.User.findOne({
          where: {
            id: req.user.id
          },
          include: [{
            model: db.Child
          }]
        })
        .then(function (dbData) {
          res.json({
            user: dbData,
            children: db.Children
          });
        }).catch(err => {
          res.send("error: " + err)
        })
    } else {
      console.log("User not authenticated");
      res.end();
    }
  });
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/user/register", (req, res) => {
    const userData = req.body;

    db.User.findOne({
        where: {
          email: req.body.email
        }
      })
      .then(user => {
        if (!user) {
          db.User.create(userData)
            .then(user => {
              res.status(200).send("You have been registered. Please log in.")
            })
        } else {
          res.send("That email already exists. Try again.")
        }
      })
      .catch(err => {
        res.send("error: " + err)
      })
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    if (req.isAuthenticated()) {
      // console.log(req.user)
      req.logout();
      res.json({
        message: "User logged out."
      })
    } else {
      res.json({
        message: "No user to log out."
      })
    }
  });

  // Route for getting some data about our user to be used client side
  app.get("/user/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
}