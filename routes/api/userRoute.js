// const userRouter = require("express").Router();
// const userController = require("../../controllers/userController");
// userRouter.route("/users")
// .get(userController.findAll)
// .post(userController.create);
// userRouter.route("/users/:id")
// .get(userController.findOne)
// .delete(userController.delete);
// module.exports = userRouter;

// *****************************************************
var db = require("../../models");
var passport = require("../../config/passport");

module.exports = function (app) {

  app.get("/user/login", passport.authenticate("local"), (req, res) => {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed

    // db.User.findOne({ where : { id: req.user.id}})
    //   .then(dbData => console.log(dbData))

    db.User.findOne({
        where: {
          id: req.user.id
        },
        include: [{
          model: db.Child
        }]
      })
      .then(function (dbData) {
        //console.log(dbData);
        res.json(dbData.Children);
      })
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/user/register", (req, res) => {
    console.log(req.body);
    const userData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    }
    db.User.findOne({
        where: {
          email: req.body.email
        }
      })
      .then(user => {
        if (!user) {
          db.User.create(userData)
            .then(user => {
              res.json({
                status: user.email + " Registered!"
              })
            })
            .catch(err => {
              res.send("error: " + err)
            })
        } else {
          res.json({
            error: "User already exists"
          })
        }
      })
      .catch(err => {
        res.send("error: " + err)
      })
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    res.redirect("/");
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



  // ****************************************
  // gets all the users
  // app.get("/users", function (req, res) {
  //   db.User.findAll({}).then(function (dbUser) {
  //     res.json(dbUser);
  //   });
  // });
  // // creates a user
  // app.post("/users", function (req, res) {
  //   db.User.create(req.body)
  //     .then(function (dbUser) {
  //       res.json(dbUser);
  //     });
  // });
  // // get a single user
  // app.get("/users/:id", function (req, res) {
  //   db.User.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (dbUser) {
  //     res.json(dbUser);
  //   });
  // });
}